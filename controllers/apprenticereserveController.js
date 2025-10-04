const ApprenticeReserveService = require('../services/apprenticereserveService');

const getAllApprenticeReserves = async (req, res) => {
    const allApprenticeReserves = await ApprenticeReserveService.getAllApprenticeReserves();

    if (allApprenticeReserves)
        res.status(200).send({ status: "OK", data: allApprenticeReserves });
    else
        res.status(400).send({ status: "FAILED", data: allApprenticeReserves });
};

const getApprenticeReserve = async (req, res) => {
    let id = req.params.id;
    try {
        const apprenticeReserve = await ApprenticeReserveService.getApprenticeReserve(id);
        res.status(200).send({ status: "OK", data: apprenticeReserve });
    } catch (error) {
        res.status(error.status || 500).send({ status: "FAILED", data: { error: error.message } });
    }
};

const createApprenticeReserve = async (req, res) => {
    let { id_user, id_calendar, entry_time, departure_time, reservation_date } = req.body;
    const createdApprenticeReserve = await ApprenticeReserveService.createApprenticeReserve({
        id_user,
        id_calendar,
        entry_time,
        departure_time,
        reservation_date
    });

    if (createdApprenticeReserve)
        return res.status(201).send({ status: "OK", data: createdApprenticeReserve });
    else
        res.status(400).send({ status: "FAILED", data: createdApprenticeReserve });
};

const updateApprenticeReserve = async (req, res) => {
    let id = req.params.id;
    let { id_user, id_calendar, entry_time, departure_time, reservation_date } = req.body;

    const updatedApprenticeReserve = await ApprenticeReserveService.updateApprenticeReserve(id, {
        id_user,
        id_calendar,
        entry_time,
        departure_time,
        reservation_date
    });

    if (updatedApprenticeReserve)
        return res.status(200).send({ status: "OK", data: updatedApprenticeReserve });
    else
        res.status(400).send({ status: "FAILED", data: updatedApprenticeReserve });
};

const deleteApprenticeReserve = async (req, res) => {
    let id = req.params.id;
    const deletedApprenticeReserve = await ApprenticeReserveService.deleteApprenticeReserve(id);

    if (deletedApprenticeReserve)
        res.status(200).send({ status: "OK", data: deletedApprenticeReserve });
    else
        res.status(400).send({ status: "FAILED", data: deletedApprenticeReserve });
};

module.exports = {
    getAllApprenticeReserves,
    getApprenticeReserve,   
    createApprenticeReserve,
    updateApprenticeReserve,
    deleteApprenticeReserve
};