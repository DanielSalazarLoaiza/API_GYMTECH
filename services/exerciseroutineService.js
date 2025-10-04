const db = require('../models');

const getAllExerciseRoutines = async () => {
    try {
        let exerciseRoutines = await db.exerciseroutine.findAll({
            include: [
                { 
                    model: db.exercise, 
                    attributes: ['name', 'example'],
                    as: 'exercise' 
                },
                { 
                    model: db.routine, 
                    attributes: ['name', 'description'],
                    as: 'routine' 
                }
            ]
        });
        return exerciseRoutines;
    } catch (error) {
        return error.message || "Error al obtener las rutinas de ejercicios";
    }
};

const getExerciseRoutine = async (id) => {
    try {
        let exerciseRoutine = await db.exerciseroutine.findByPk(id, {
            include: [
                { 
                    model: db.exercise, 
                    attributes: ['name', 'example'], 
                    as: 'exercise' 
                },
                { 
                    model: db.routine, 
                    attributes: ['name', 'description'], 
                    as: 'routine' 
                }
            ]
        });
        return exerciseRoutine;
    } catch (error) {
        return error.message || "Error al obtener la rutina de ejercicios";
    }
};

const createExerciseRoutine = async (data) => {
    try {
        let newExerciseRoutine = await db.exerciseroutine.create({
            series: data.series,
            repetitions: data.repetitions,
            weight: data.weight,
            id_exercise: data.id_exercise,
            id_routine: data.id_routine
        });
        return newExerciseRoutine;
    } catch (error) {
        return error.message || "Error al crear la rutina de ejercicios";
    }
};

const updateExerciseRoutine = async (id, data) => {
    try {
        let updatedExerciseRoutine = await db.exerciseroutine.update({
            series: data.series,
            repetitions: data.repetitions,
            weight: data.weight,
            id_exercise: data.id_exercise,
            id_routine: data.id_routine
        }, {
            where: { id: id }
        });
        return updatedExerciseRoutine;
    } catch (error) {
        return error.message || "Error al actualizar la rutina de ejercicios";
    }
};

const deleteExerciseRoutine = async (id) => {
    try {
        let deletedExerciseRoutine = await db.exerciseroutine.destroy({
            where: { id: id }
        });
        return deletedExerciseRoutine;
    } catch (error) {
        return error.message || "Error al eliminar la rutina de ejercicios";
    }
};

module.exports = {
    getAllExerciseRoutines,
    getExerciseRoutine,
    createExerciseRoutine,
    updateExerciseRoutine,
    deleteExerciseRoutine
};
