const TrainingProgram = require('../services/trainingprogramService');

const getAllTrainingPrograms = async (req, res) => {
    const allTrainingPrograms = await TrainingProgram.getAllTrainingPrograms();

    if (allTrainingPrograms) {
        res.status(200).send({ status: "OK", data: allTrainingPrograms });
    } else {
        res.status(400).send({ status: "FAILED", data: allTrainingPrograms })
    }
};

const getTrainingProgram = async (req, res) => {
    let id = req.params.id;
    try {
        const trainingProgram = await TrainingProgram.getTrainingProgram(id);
        res.status(200).send({ status: "OK", data: trainingProgram })
    } catch (error) {
        res.status(error.status || 500).send({ status: "FAILED", data: { error: error.message } });
    }
};

const createTrainingProgram = async (req, res) => {
    let { token_number, name, id_trainingcenter } = req.body;
    const createdTrainingProgram = await TrainingProgram.createTrainingProgram({
        token_number,
        name,
        id_trainingcenter
    });

    if (createdTrainingProgram) {
        res.status(201).send({ status: "OK", data: createdTrainingProgram });
    } else {
        res.status(400).send({ status: "FAILED", data: createdTrainingProgram });
    }
};

const updateTrainingProgram = async (req, res) => {
    let id = req.params.id;
    let { token_number, name, id_trainingcenter } = req.body;

    const updatedTrainingProgram = await TrainingProgram.updateTrainingProgram(id, {
        token_number,
        name,
        id_trainingcenter
    });

    if (updatedTrainingProgram) {
        res.status(200).send({ status: "OK", data: updatedTrainingProgram });
    } else {
        res.status(400).send({ status: "FAILED", data: updatedTrainingProgram });
    }
};

const deleteTrainingProgram = async (req, res) => {
    let id = req.params.id;
    const deletedTrainingProgram = await TrainingProgram.deleteTrainingProgram(id);

    if (deletedTrainingProgram) {
        res.status(200).send({ status: "OK", data: deletedTrainingProgram });
    } else {
        res.status(400).send({ status: "FAILED", data: deletedTrainingProgram });
    }
};  

module.exports = {
    getAllTrainingPrograms,
    getTrainingProgram,
    createTrainingProgram,
    updateTrainingProgram,
    deleteTrainingProgram
};