const db = require('../models');

const getAllProgressControls = async () => {
    try {
        let progressControls = await db.progresscontrol.findAll({
            include: [
                {
                    model: db.user,
                    as: 'user',
                    attributes: ['id', 'name', 'email']
                }
            ]
        });
        return progressControls;
    } catch (error) {
        return error.message || "Error al obtener los controles de progreso";
    }
};

const getProgressControl = async (id) => {
    try {
        let progressControl = await db.progresscontrol.findByPk(id, {
            include: [
                {
                    model: db.user,
                    as: 'user',
                    attributes: ['id', 'name', 'email']
                }
            ]
        });
        return progressControl;
    } catch (error) {
        return error.message || "Error al obtener el control de progreso";
    }
};

const createProgressControl = async (data) => {
    try {
        let newProgressControl = await db.progresscontrol.create({
            date_completion: data.date_completion,
            peso: data.peso,
            waist: data.waist,
            hip: data.hip,
            right_thigh: data.right_thigh,
            left_thigh: data.left_thigh,
            right_arm: data.right_arm,
            left_arm: data.left_arm,
            right_forearm: data.right_forearm,
            left_forearm: data.left_forearm,
            right_calf: data.right_calf,
            left_calf: data.left_calf,
            medical_examination: data.medical_examination,
            observations: data.observations,
            exam_date: data.exam_date,
            id_user: data.id_user
        });
        return newProgressControl;
    } catch (error) {
        return error.message || "Error al crear el control de progreso";
    }
};

const updateProgressControl = async (id, data) => {
    try {
        let updatedProgressControl = await db.progresscontrol.update({
            date_completion: data.date_completion,
            peso: data.peso,
            waist: data.waist,
            hip: data.hip,
            right_thigh: data.right_thigh,
            left_thigh: data.left_thigh,
            right_arm: data.right_arm,
            left_arm: data.left_arm,
            right_forearm: data.right_forearm,
            left_forearm: data.left_forearm,
            right_calf: data.right_calf,
            left_calf: data.left_calf,
            medical_examination: data.medical_examination,
            observations: data.observations,
            exam_date: data.exam_date,
            id_user: data.id_user
        }, {
            where: { id }
        });
        return updatedProgressControl;
    } catch (error) {
        return error.message || "Error al actualizar el control de progreso";
    }
};

const deleteProgressControl = async (id) => {
    try {
        let deletedProgressControl = await db.progresscontrol.destroy({
            where: { id }
        });
        return deletedProgressControl;
    } catch (error) {
        return error.message || "Error al eliminar el control de progreso";
    }
};

module.exports = {
    getAllProgressControls,
    getProgressControl,
    createProgressControl,
    updateProgressControl,
    deleteProgressControl
};