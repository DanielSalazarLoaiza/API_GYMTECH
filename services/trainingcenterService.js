const db = require('../models');

const getAllTrainingCenters = async () => {
    try {
        let trainingCenters = await db.trainingcenter.findAll();
        return trainingCenters;
    } catch (error) {
        return error.message || "Error al obtener los centros de entrenamiento";
    }
};

const getTrainingCenter = async (id) => {
    try {
        let trainingCenter = await db.trainingcenter.findByPk(id);
        return trainingCenter;
    } catch (error) {
        throw { status: 500, message: error.message || "Error al obtener el centro de entrenamiento" };
    }
};

const createTrainingCenter = async (name) => {
    try {
        let newTrainingCenter = await db.trainingcenter.create({ name });
        return newTrainingCenter;
    } catch (error) {
        return error.message || "Error al crear el centro de formación";
    }
};

const updateTrainingCenter = async (id, name) => {
    try {
        let updatedTrainingCenter = await db.trainingcenter.update(
            { name },
            { where: { id: id } }
        );
        return updatedTrainingCenter;
    } catch (error) {
        return error.message || "Error al actualizar el centro de formación";
    }
};  

const deleteTrainingCenter = async (id) => {
    try {
        let deletedTrainingCenter = await db.trainingcenter.destroy({ where: { id: id } });
        return deletedTrainingCenter;
    } catch (error) {
        return error.message || "Error al eliminar el centro de formación";
    }
};

module.exports = {
    getAllTrainingCenters,
    getTrainingCenter,
    createTrainingCenter,
    updateTrainingCenter,
    deleteTrainingCenter
};