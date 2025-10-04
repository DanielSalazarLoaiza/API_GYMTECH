const { Router } = require('express');
const router = Router();
const incomeRecordController = require('../../../controllers/incomerecordController');

router.get('/', incomeRecordController.getAllIncomeRecords);
router.get('/:id', incomeRecordController.getIncomeRecord);
router.post('/', incomeRecordController.createIncomeRecord);
router.put('/:id', incomeRecordController.updateIncomeRecord);
router.delete('/:id', incomeRecordController.deleteIncomeRecord);

module.exports = router;