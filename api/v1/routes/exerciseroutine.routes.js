const { Router } = require('express');
const router = Router();
const exerciseRoutineController = require('../../../controllers/exerciseroutineController');

router.get('/', exerciseRoutineController.getAllExerciseRoutines);
router.get('/:id', exerciseRoutineController.getExerciseRoutine);
router.post('/', exerciseRoutineController.createExerciseRoutine);
router.put('/:id', exerciseRoutineController.updateExerciseRoutine);
router.delete('/:id', exerciseRoutineController.deleteExerciseRoutine);

module.exports = router;