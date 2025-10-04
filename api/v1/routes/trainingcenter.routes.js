const { Router } = require('express');
const router = Router();
const trainingCenterController = require('../../../controllers/trainingcenterController');

router.get('/', trainingCenterController.getAllTrainingCenters);
router.get('/:id', trainingCenterController.getTrainingCenter);
router.post('/', trainingCenterController.createTrainingCenter);
router.put('/:id', trainingCenterController.updateTrainingCenter);
router.delete('/:id', trainingCenterController.deleteTrainingCenter);

module.exports = router;