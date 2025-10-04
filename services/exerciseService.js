const db = require('../models');

const getAllExercises = async () => {
    try {
        let exercises = await db.exercise.findAll({
            include: [{
                model: db.musclegroup,
                attributes: ['name'],
                as: 'musclegroup'
            }]
        });
        return exercises;
    } catch (error) {
        return error.message || "Error al obtener los ejercicios";
    }
};  

const getExercise = async (id) => {
    try {
        let exercise = await db.exercise.findByPk(id, {
            include: [{
                model: db.musclegroup,
                attributes: ['name'],
                as: 'musclegroup'
            }]
        });
        return exercise;
    } catch (error) {
        return error.message || "Error al obtener el ejercicio";
    }
};

const createExercise = async (data) => {
    try {
        let newExercise = await db.exercise.create({
            name: data.name, 
            example: data.example,
            id_musclegroup: data.id_musclegroup
        });
        return newExercise;
    } catch (error) {
        return error.message || "Error al crear el ejercicio";
    }
};

const updateExercise = async (id, data) => {
    try {
        let updatedExercise = await db.exercise.update({
            name: data.name,
            example: data.example,
            id_musclegroup: data.id_musclegroup
        }, {
            where: { id: id }
        });
        return updatedExercise;
    } catch (error) {
        return error.message || "Error al actualizar el ejercicio";
    }
};

const deleteExercise = async (id) => {
    try {
        let deletedExercise = await db.exercise.destroy({
            where: { id: id }
        });
        return deletedExercise;
    } catch (error) {
        return error.message || "Error al eliminar el ejercicio";
    }
};

module.exports = {
    getAllExercises,
    getExercise,
    createExercise,
    updateExercise,
    deleteExercise
};