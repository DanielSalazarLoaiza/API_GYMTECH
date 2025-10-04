const { Router } = require('express');
const router = Router();
const groupController = require('../../../controllers/groupController');

router.get('/', groupController.getAllGroups);
router.get('/:id', groupController.getGroup);
router.post('/', groupController.createGroup);
router.put('/:id', groupController.updateGroup);
router.delete('/:id', groupController.deleteGroup);

module.exports = router;