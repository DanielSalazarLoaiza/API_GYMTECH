const ExerciseRoutineService = require('../services/exerciseroutineService');

const getAllExerciseRoutines = async (req, res) => {
    const allExerciseRoutines = await ExerciseRoutineService.getAllExerciseRoutines();

    if (allExerciseRoutines) {
        res.status(200).send({ status: "OK", data: allExerciseRoutines });
    } else {
        res.status(400).send({ status: "FAILED", message: "No se encontraron ejercicios con rutinas" });
    }
};

const getExerciseRoutine = async (req, res) => {
    let id = req.params.id;
    try {
        const exerciseRoutine = await ExerciseRoutineService.getExerciseRoutine(id);
        res.status(200).send({ status: "OK", data: exerciseRoutine });
    } catch (error) {
        res.status(400).send({ status: "FAILED", message: error.message || "Ejercicio con rutina no encontrado" });
    }
};

const createExerciseRoutine = async (req, res) => {
    let { series, repetitions, weight, id_exercise, id_routine } = req.body;
    const createdExerciseRoutine = await ExerciseRoutineService.createExerciseRoutine({
        series,
        repetitions,
        weight,
        id_exercise,
        id_routine
    });
    if (createdExerciseRoutine) {
        res.status(201).send({ status: "OK", data: createdExerciseRoutine });
    } else {
        res.status(400).send({ status: "FAILED", message: "Error al crear la rutina de ejercicios" });
    }
};

const updateExerciseRoutine = async (req, res) => {
    let id = req.params.id;
    let { series, repetitions, weight, id_exercise, id_routine } = req.body;
    const updatedExerciseRoutine = await ExerciseRoutineService.updateExerciseRoutine(id, {
        series,
        repetitions,
        weight,
        id_exercise,
        id_routine
    });
    if (updatedExerciseRoutine) {
        res.status(200).send({ status: "OK", data: updatedExerciseRoutine });
    } else {
        res.status(400).send({ status: "FAILED", message: "Error al actualizar la rutina de ejercicios" });
    }
};

const deleteExerciseRoutine = async (req, res) => {
    let id = req.params.id;
    const deletedExerciseRoutine = await ExerciseRoutineService.deleteExerciseRoutine(id);
    if (deletedExerciseRoutine) {
        res.status(200).send({ status: "OK", data: deletedExerciseRoutine });
    } else {
        res.status(400).send({ status: "FAILED", message: "Error al eliminar la rutina de ejercicios" });
    }
};

module.exports = {
    getAllExerciseRoutines,
    getExerciseRoutine,
    createExerciseRoutine,
    updateExerciseRoutine,
    deleteExerciseRoutine
};