const { Router } = require('express');
const router = Router();
const roleController = require('../../../controllers/roleController');

router.get('/', roleController.getAllRoles);
router.get('/:id', roleController.getRole);
router.post('/', roleController.createRole);
router.put('/:id', roleController.updateRole);
router.delete('/:id', roleController.deleteRole);

module.exports = router;