const { Router } = require('express');
const router = Router();
const apprenticeReserveController = require('../../../controllers/apprenticereserveController');

router.get('/', apprenticeReserveController.getAllApprenticeReserves);
router.get('/:id', apprenticeReserveController.getApprenticeReserve);
router.post('/', apprenticeReserveController.createApprenticeReserve);
router.put('/:id', apprenticeReserveController.updateApprenticeReserve);
router.delete('/:id', apprenticeReserveController.deleteApprenticeReserve);

module.exports = router;