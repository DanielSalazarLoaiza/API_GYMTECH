const db = require('../models');

const getAllPasswordResetTokens = async () => {
    try {
        let passwordResetTokens = await db.password_reset_token.findAll({
            include: [{
                model: db.user,
                attributes: ['name'],
                as: 'user'
            }]
        });
        return passwordResetTokens;
    } catch (error) {
        return error.message || "Error al obtener los tokens de restablecimiento de contraseña";
    }
};

const getPasswordResetToken = async (id) => {
    try {
        let passwordResetToken = await db.password_reset_token.findByPk(id, {
            include: [{
                model: db.user,
                attributes: ['name'],
                as: 'user'
            }]
        });
        return passwordResetToken;
    } catch (error) {
        throw { status: 500, message: error.message || "Error al obtener el token de restablecimiento de contraseña" };
    }
};

const deletePasswordResetToken = async (id) => {
    try {
        let deletedPasswordResetToken = await db.password_reset_token.destroy({ where: { id: id } });
        return deletedPasswordResetToken;
    } catch (error) {
        return error.message || "Error al eliminar el token de restablecimiento de contraseña";
    }
};

module.exports = {
    getAllPasswordResetTokens,
    getPasswordResetToken,
    deletePasswordResetToken
};