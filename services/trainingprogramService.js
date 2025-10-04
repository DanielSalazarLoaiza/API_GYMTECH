const db = require('../models');

const getAllTrainingPrograms = async () => {
    try {
        let trainingPrograms = await db.trainingprogram.findAll({
            include: [{
                model: db.trainingcenter,
                attributes: ['name'],
                as: 'trainingCenter'
            }]
        });
        return trainingPrograms;
    } catch (error) {
        return error.message || "Error al obtener los programas de formación";
    }
};

const getTrainingProgram = async (id) => {
    try {
        let trainingProgram = await db.trainingprogram.findByPk(id, {
            include: [{
                model: db.trainingcenter,
                attributes: ['name'],
                as: 'trainingCenter'
            }]
        });
        return trainingProgram;
    } catch (error) {
        throw { status: 500, message: error.message || "Error al obtener el programa de formación" };
    }
};

const createTrainingProgram = async (data) => {
    try {
        let newTrainingProgram = await db.trainingprogram.create({
            token_number: data.token_number,
            name: data.name,
            id_trainingcenter: data.id_trainingcenter
        });
        return newTrainingProgram;
    } catch (error) {
        return error.message || "Error al crear el programa de formación";
    }
};

const updateTrainingProgram = async (id, data) => {
    try {
        let updatedTrainingProgram = await db.trainingprogram.update(
            {
                token_number: data.token_number,
                name: data.name,
                id_trainingcenter: data.id_trainingcenter
            },
            { where: { id: id }}
        );
        return updatedTrainingProgram;
    } catch (error) {
        return error.message || "Error al actualizar el programa de formación";
    }
};

const deleteTrainingProgram = async (id) => {
    try {
        let deletedTrainingProgram = await db.trainingprogram.destroy({ where: { id: id } }); 
        return deletedTrainingProgram;
    } catch (error) {
        return error.message || "Error al eliminar el programa de formación";
    }
};

module.exports = {
    getAllTrainingPrograms,
    getTrainingProgram,
    createTrainingProgram,
    updateTrainingProgram,
    deleteTrainingProgram
};