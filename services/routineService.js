const db = require('../models');

const getAllRoutines = async () => {
    try {
        let routines = await db.routine.findAll();
        return routines;
    } catch (error) {
        return error.message || "Error al obtener las rutinas";
    }
};

const getRoutine = async (id) => {
    try {
        let routine = await db.routine.findByPk(id);
        return routine;
    } catch (error) {
        throw { status: 500, message: error.message || "Error al obtener la rutina" };
    }
};

const createRoutine = async (name, description) => {
    try {
        let newRoutine = await db.routine.create({ name, description });
        return newRoutine;
    } catch (error) {
        return error.message || "Error al crear la rutina";
    }
};

const updateRoutine = async (id, name, description) => {
    try {
        let updatedRoutine = await db.routine.update(
            { name, description },
            { where: { id: id } }
        );
        return updatedRoutine;
    } catch (error) {
        return error.message || "Error al actualizar la rutina";
    }
};

const deleteRoutine = async (id) => {
    try {
        let deletedRoutine = await db.routine.destroy({ where: { id: id } });
        return deletedRoutine;
    } catch (error) {
        return error.message || "Error al eliminar la rutina";
    }
};

module.exports = {
    getAllRoutines,
    getRoutine,
    createRoutine,
    updateRoutine,
    deleteRoutine
};