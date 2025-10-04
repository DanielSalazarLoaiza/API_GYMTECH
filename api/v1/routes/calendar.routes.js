const { Router } = require('express');
const router = Router();
const calendarController = require('../../../controllers/calendarController');

router.get('/', calendarController.getAllCalendars);
router.get('/:id', calendarController.getCalendar);
router.post('/', calendarController.createCalendar);
router.put('/:id', calendarController.updateCalendar);
router.delete('/:id', calendarController.deleteCalendar);

module.exports = router;