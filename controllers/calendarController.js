const calendarService = require('../services/calendarService');

const getAllCalendars = async (req, res) => {
    const allCalendars = await calendarService.getAllCalendars();

    if (allCalendars) {
        res.status(200).send({ status: "OK", data: allCalendars });
    } else {
        res.status(400).send({ status: "FAILED", data: allCalendars });
    }
};

const getCalendar = async (req, res) => {
    let id = req.params.id;
    try {
        const calendar = await calendarService.getCalendar(id);
        res.status(200).send({ status: "OK", data: calendar });
    } catch (error) {
        res.status(error.status || 500).send({ status: "FAILED", data: { error: error.message } });
    }
};

const createCalendar = async (req, res) => {
    let { date, start_time, end_time, id_user, max_capicity, status } = req.body;
    const createdCalendar = await calendarService.createCalendar({
        date,
        start_time,
        end_time,
        id_user,
        max_capicity,
        status
    });

    if (createdCalendar) {
        res.status(201).send({ status: "OK", data: createdCalendar });
    } else {
        res.status(400).send({ status: "FAILED", data: createdCalendar });
    }
};

const updateCalendar = async (req, res) => {
    let id = req.params.id;
    let { date, start_time, end_time, id_user, max_capicity, status } = req.body;

    const updatedCalendar = await calendarService.updateCalendar(id, {
        date,
        start_time,
        end_time,
        id_user,
        max_capicity,
        status
    });

    if (updatedCalendar) {
        res.status(200).send({ status: "OK", data: updatedCalendar });
    } else {
        res.status(400).send({ status: "FAILED", data: updatedCalendar });
    }
};

const deleteCalendar = async (req, res) => {
    let id = req.params.id;
    const deletedCalendar = await calendarService.deleteCalendar(id);
    if (deletedCalendar) {
        res.status(200).send({ status: "OK", data: deletedCalendar });
    } else {
        res.status(400).send({ status: "FAILED", data: deletedCalendar });
    }
};

module.exports = {
    getAllCalendars,
    getCalendar,
    createCalendar,
    updateCalendar,
    deleteCalendar
};