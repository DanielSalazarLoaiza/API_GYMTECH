const { Router } = require('express');
const router = Router();
const trainingprogramController = require('../../../controllers/trainingprogramController');

router.get('/', trainingprogramController.getAllTrainingPrograms);
router.get('/:id', trainingprogramController.getTrainingProgram);
router.post('/', trainingprogramController.createTrainingProgram);
router.put('/:id', trainingprogramController.updateTrainingProgram);
router.delete('/:id', trainingprogramController.deleteTrainingProgram);

module.exports = router;