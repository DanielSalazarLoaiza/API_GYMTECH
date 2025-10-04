const RoutineService = require('../services/routineService');

const getAllRoutines = async (req, res) => {
    const allRoutines = await RoutineService.getAllRoutines();

    if (allRoutines) {
        res.status(200).send({ status: "OK", data: allRoutines });
    } else {
        res.status(400).send({ status: "FAILED", data: allRoutines });
    }
};

const getRoutine = async (req, res) => {
    let id = req.params.id;
    try {
        const routine = await RoutineService.getRoutine(id);
        res.status(200).send({ status: "OK", data: routine });
    } catch (error) {
        res.status(error.status || 500).send({ status: "FAILED", data: { error: error.message } });
    }
};

const createRoutine = async (req, res) => {
    let { name, description } = req.body;
    const createdRoutine = await RoutineService.createRoutine(name, description);

    if (createdRoutine) {
        res.status(201).send({ status: "OK", data: createdRoutine });
    } else {
        res.status(400).send({ status: "FAILED", data: createdRoutine });
    }
};

const updateRoutine = async (req, res) => {
    let id = req.params.id;
    let { name, description } = req.body;
    const updatedRoutine = await RoutineService.updateRoutine(id, name, description);

    if (updatedRoutine) {
        res.status(200).send({ status: "OK", data: updatedRoutine });
    } else {
        res.status(400).send({ status: "FAILED", data: updatedRoutine });
    }
};

const deleteRoutine = async (req, res) => {
    let id = req.params.id;
    const deletedRoutine = await RoutineService.deleteRoutine(id);

    if (deletedRoutine) {
        res.status(200).send({ status: "OK", data: deletedRoutine });
    } else {
        res.status(400).send({ status: "FAILED", data: deletedRoutine });
    }
};

module.exports = {
    getAllRoutines,
    getRoutine,
    createRoutine,
    updateRoutine,
    deleteRoutine
};