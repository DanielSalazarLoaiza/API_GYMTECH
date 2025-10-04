const { Router } = require('express');
const router = Router();
const musclegroupController = require('../../../controllers/musclegroupController');

router.get('/', musclegroupController.getAllMuscleGroups);
router.get('/:id', musclegroupController.getMuscleGroup);
router.post('/', musclegroupController.createMuscleGroup);
router.put('/:id', musclegroupController.updateMuscleGroup);
router.delete('/:id', musclegroupController.deleteMuscleGroup);

module.exports = router;