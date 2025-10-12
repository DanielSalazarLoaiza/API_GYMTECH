const PasswordResetTokenService = require('../services/passwordResetTokenService');

const getAllPasswordResetTokens = async (req, res) => {
    const allPasswordResetTokens = await PasswordResetTokenService.getAllPasswordResetTokens();

    if (allPasswordResetTokens) {
        res.status(200).send({ status: "OK", data: allPasswordResetTokens });
    } else {
        res.status(400).send({ status: "FAILED", data: allPasswordResetTokens });
    }
};

const getAllPasswordResetToken = async (req, res) => {
    let id = req.params.id;
    try {
        const passwordResetToken = await PasswordResetTokenService.getPasswordResetToken(id);
        res.status(200).send({ status: "OK", data: passwordResetToken });
    } catch (error) {
        res.status(error.status || 500).send({ status: "FAILED", data: { error: error.message } });
    }
};  

const deletePasswordResetToken = async (req, res) => {
    let id = req.params.id;
    const deletedPasswordResetToken = await PasswordResetTokenService.deletePasswordResetToken(id);

    if (deletedPasswordResetToken) {
        res.status(200).send({ status: "OK", data: deletedPasswordResetToken });
    } else {
        res.status(400).send({ status: "FAILED", data: deletedPasswordResetToken });
    }
};

module.exports = {
    getAllPasswordResetTokens,
    getAllPasswordResetToken,
    deletePasswordResetToken
};