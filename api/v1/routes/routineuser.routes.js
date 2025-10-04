const { Router } = require('express');
const router = Router();
const routineUserController = require('../../../controllers/routineuserController');

router.get('/', routineUserController.getAllRoutineUsers);
router.get('/:id', routineUserController.getRoutineUser);
router.post('/', routineUserController.createRoutineUser);
router.put('/:id', routineUserController.updateRoutineUser);
router.delete('/:id', routineUserController.deleteRoutineUser);

module.exports = router;