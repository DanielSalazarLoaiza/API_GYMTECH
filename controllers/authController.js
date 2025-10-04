const user = require("../models").user;
const jwt = require("jsonwebtoken");
const sendEmail = require("../utils/email");
const crypto = require("crypto");
const bcrypt = require("bcryptjs");
const { Op } = require("sequelize");

module.exports = {
    authenticate: async function (req, res) {
        try {
            let data = await user.login(req.body.email, req.body.password);
            if (data.user) {
                let token = jwt.sign({ user: data.user }, process.env.JWT_SECRET, {
                    expiresIn: 60 * 60 * 24,
                });
                return res.status(200).json({ 
                    token, 
                    user: { id:data.user.id, name:data.user.name, id_role:data.user.id_role, rol:data.user.rol.name } 
                });
            }
            return res.status(data.status).json(data);
        } catch (error) {
            console.log(error);
            return res.status(500).json(error);
        }
    },

    getUserAuthenticated: async function (req, res) {
        try {
            let data = req.headers.authorization.split(" ");
            if (data[0] === "Bearer") {
                let isValidToken = jwt.verify(data[1], process.env.JWT_SECRET);
                if (isValidToken) {
                    return res.status(200).json({
                        user: isValidToken.user,
                    });
                }
            } else {
                return res.status(400).json({
                    message: "El token debe ser enviado junto a Bearer",
                });
            }
        } catch (error) {
            return res.status(500).json(error);
        }
    },

    forgotPassword: async function (req, res) {
        try {
            const { email } = req.body;
            const usr = await user.findOne({ where: { email } });
            if (!usr) {
                return res.status(404).json({ message: "Usuario no encontrado" });
            }

            // ⚠️ si tu tabla aún no tiene estas columnas, agrega en DB
            const token = crypto.randomBytes(32).toString("hex");
            const expires = Date.now() + 1000 * 60 * 60;
            usr.passwordResetToken = token;
            usr.passwordResetExpires = new Date(expires);
            await usr.save();

            const resetLink = `${process.env.FRONTEND_URL}/api/v1/auth/resetPassword?token=${token}`;

            await sendEmail({
                to: usr.email,
                subject: "Recuperación de contraseña - GymTech SENA",
                html: `
                    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
                        <h2 style="color: #008550;">GymTech SENA</h2>
                        <p>Hola <strong>${user.name}</strong>,</p>

                        <p>Recibimos una solicitud para restablecer tu contraseña. Si no realizaste esta solicitud, puedes ignorar este mensaje.</p>

                        <p>Para restablecer tu contraseña, haz clic en el siguiente botón:</p>

                        <div style="text-align: center; margin: 30px 0;">
                            <a href="${resetLink}" style="background-color: #008550; color: white; padding: 12px 25px; text-decoration: none; border-radius: 5px; font-weight: bold;">
                                Restablecer Contraseña
                            </a>
                        </div>

                        <p>O también puedes copiar y pegar el siguiente enlace en tu navegador:</p>
                        <p style="word-break: break-all; color: #555;">${resetLink}</p>

                        <p>Este enlace expirará en <strong>1 hora</strong>.</p>

                        <hr style="margin-top: 40px;">
                        <p style="font-size: 12px; color: #888;">Este mensaje fue generado automáticamente por el Software de planificación de la FPI para grupos y ambientes de formación - C.P.I.C. No respondas a este correo.</p>
                    </div>
                    `,
            });

            return res.status(200).json({ message: "Correo de recuperación enviado" });
        } catch (error) {
            console.error("Error al enviar el correo de recuperación: ", error);
            return res.status(500).json({ message: "Error al enviar el correo de recuperación" });
        }
    },

    resetPassword: async (req, res) => {
        const { newPassword, token } = req.body;
        try {
            const usr = await user.findOne({
                where: {
                    passwordResetToken: token,
                    passwordResetExpires: { [Op.gt]: new Date() }
                }
            });

            if (!usr) {
                return res.status(404).json({ message: "Token inválido o expirado" });
            }

            usr.passwordResetToken = null;
            usr.passwordResetExpires = null;
            usr.password = await bcrypt.hash(newPassword, 10);
            await usr.save();

            res.status(200).send({ status: "OK", message: "Contraseña actualizada con éxito" });
        } catch (error) {
            console.error("Error al restablecer la contraseña: ", error);
            res.status(500).send({ status: "FAILED", message: "Error al cambiar la contraseña" });
        }
    },
};
