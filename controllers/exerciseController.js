const ExerciseService = require('../services/exerciseService');

const getAllExercises = async (req, res) => {
    const allExercises = await ExerciseService.getAllExercises();

    if (allExercises) {
        res.status(200).send({ status: "OK", data: allExercises });
    } else {
        res.status(400).send({ status: "FAILED", data: allExercises });
    }
};

const getExercise = async (req, res) => {
    let id = req.params.id;
    try {
        const exercise = await ExerciseService.getExercise(id);
        res.status(200).send({ status: "OK", data: exercise });
    } catch (error) {
        res.status(400).send({ status: "FAILED", data: error.message });
    }
};

const createExercise = async (req, res) => {
    let { name, example, id_musclegroup } = req.body;
    const createdExercise = await ExerciseService.createExercise({
        name,
        example,
        id_musclegroup
    });

    if (createdExercise) {
        return res.status(201).send({ status: "OK", data: createdExercise });
    } else {
        res.status(400).send({ status: "FAILED", data: createdExercise });
    }
};

const updateExercise = async (req, res) => {
    let id = req.params.id;
    let { name, example, id_musclegroup } = req.body;

    const updatedExercise = await ExerciseService.updateExercise(id, {
        name,
        example,
        id_musclegroup
    });

    if (updatedExercise) {
        return res.status(200).send({ status: "OK", data: updatedExercise });
    } else {
        res.status(400).send({ status: "FAILED", data: updatedExercise });
    }
};

const deleteExercise = async (req, res) => {
    let id = req.params.id;
    const deletedExercise = await ExerciseService.deleteExercise(id);

    if (deletedExercise) {
        res.status(200).send({ status: "OK", data: deletedExercise });
    } else {
        res.status(400).send({ status: "FAILED", data: deletedExercise });
    }
};

module.exports = {
    getAllExercises,
    getExercise,
    createExercise,
    updateExercise,
    deleteExercise
};