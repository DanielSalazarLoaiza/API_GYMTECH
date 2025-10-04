const { Router } = require('express');
const router = Router();
const progressControlController = require('../../../controllers/progresscontrolController');

router.get('/', progressControlController.getAllProgressControls);
router.get('/:id', progressControlController.getProgressControl);
router.post('/', progressControlController.createProgressControl);
router.put('/:id', progressControlController.updateProgressControl);
router.delete('/:id', progressControlController.deleteProgressControl);

module.exports = router;