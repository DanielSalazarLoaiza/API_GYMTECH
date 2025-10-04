const { Router } = require('express');
const router = Router();
const activityController = require('../../../controllers/activityController');

router.get('/', activityController.getAllActivities);
router.get('/:id', activityController.getActivity);
router.post('/', activityController.createActivity);
router.put('/:id', activityController.updateActivity);
router.delete('/:id', activityController.deleteActivity);

module.exports = router;