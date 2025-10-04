const db = require('../models');

const getAllActivities = async () => {
    try {
        let activities = await db.activity.findAll();
        return activities;
    } catch (error) {
        return error.message || "Error al obtener las actividades";
    }
};

const getActivity = async (id) => {
    try {
        let activity = await db.activity.findByPk(id);
        return activity;
    } catch (error) {
        throw { status: 500, message: error.message || "Error al obtener la actividad" };
    }
};

const createActivity = async (name, description) => {
    try {
        let newActivity = await db.activity.create({ name, description });
        return newActivity;
    } catch (error) {
        return error.message || "Error al crear la actividad";
    }
};

const updateActvity = async (id, name, description) => {
    try {
        let updatedActivity = await db.activity.update(
            { name, description },
            { where: { id: id } }
        );
        return updatedActivity;
    } catch (error) {
        return error.message || "Error al actualizar la actividad";
    }
};

const deleteActivity = async (id) => {
    try {
        let deletedActivity = await db.activity.destroy({ where: { id: id } });
        return deletedActivity;
    } catch (error) {
        return error.message || "Error al eliminar la actividad";
    }
};

module.exports = {
    getAllActivities,
    getActivity,
    createActivity,
    updateActvity,
    deleteActivity
};