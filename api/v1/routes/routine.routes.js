const { Router } = require('express');
const router = Router();
const routineController = require('../../../controllers/routineController');

router.get('/', routineController.getAllRoutines);
router.get('/:id', routineController.getRoutine);
router.post('/', routineController.createRoutine);
router.put('/:id', routineController.updateRoutine);
router.delete('/:id', routineController.deleteRoutine);

module.exports = router;
