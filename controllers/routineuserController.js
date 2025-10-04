const RoutineUserService = require('../services/routineuserService');

const getAllRoutineUsers = async (req, res) => {
    const allRoutineUsers = await RoutineUserService.getAllRoutineUsers();

    if (allRoutineUsers) {
        res.status(200).send({ status: "OK", data: allRoutineUsers });
    } else {
        res.status(404).send({ status: "FAILED", message: "No se encontraron usuarios con rutinas" });
    }
};

const getRoutineUser = async (req, res) => {
    let id = req.params.id;
    try {
        const routineUser = await RoutineUserService.getRoutineUser(id);
        res.status(200).send({ status: "OK", data: routineUser });
    } catch (error) {
        res.status(404).send({ status: "FAILED", message: error.message || "Usuario con rutina no encontrado" });
    }
};

const createRoutineUser = async (req, res) => {
    let { id_user, id_routine } = req.body;
    const createdRoutineUser = await RoutineUserService.createRoutineUser({
        id_user,
        id_routine
    });
    if (createdRoutineUser) {
        res.status(201).send({ status: "OK", data: createdRoutineUser });
    } else {
        res.status(400).send({ status: "FAILED", message: "Error al crear el usuario con rutina" });
    }
};

const updateRoutineUser = async (req, res) => {
    let id = req.params.id;
    let { id_user, id_routine } = req.body;
    const updatedRoutineUser = await RoutineUserService.updateRoutineUser(id, {
        id_user,
        id_routine
    });
    if (updatedRoutineUser) {
        res.status(200).send({ status: "OK", data: updatedRoutineUser });
    } else {
        res.status(400).send({ status: "FAILED", message: "Error al actualizar el usuario con rutina" });
    }
};

const deleteRoutineUser = async (req, res) => {
    let id = req.params.id;
    const deletedRoutineUser = await RoutineUserService.deleteRoutineUser(id);
    if (deletedRoutineUser) {
        res.status(200).send({ status: "OK", data: deletedRoutineUser });
    } else {
        res.status(400).send({ status: "FAILED", message: "Error al eliminar el usuario con rutina" });
    }
};

module.exports = {
    getAllRoutineUsers,
    getRoutineUser,
    createRoutineUser,
    updateRoutineUser,
    deleteRoutineUser
};