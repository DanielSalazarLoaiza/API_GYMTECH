const { Router } = require('express');
const router = Router();
const exerciseController = require('../../../controllers/exerciseController');

router.get('/', exerciseController.getAllExercises);
router.get('/:id', exerciseController.getExercise);
router.post('/', exerciseController.createExercise);
router.put('/:id', exerciseController.updateExercise);
router.delete('/:id', exerciseController.deleteExercise);

module.exports = router;