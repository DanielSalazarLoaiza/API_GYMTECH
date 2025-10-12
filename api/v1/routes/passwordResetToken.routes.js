const { Router } = require('express');
const router = Router();
const passwordResetTokenController = require('../../../controllers/passwordResetTokenController');

router.get('/passwordResetTokens', passwordResetTokenController.getAllPasswordResetTokens);
router.get('/passwordResetToken/:id', passwordResetTokenController.getAllPasswordResetToken);
router.delete('/passwordResetToken/:id', passwordResetTokenController.deletePasswordResetToken);

module.exports = router;