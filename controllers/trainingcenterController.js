const TrainingCenterService = require('../services/trainingcenterService');

const getAllTrainingCenters = async (req, res) => {
    const allTrainingCenters = await TrainingCenterService.getAllTrainingCenters();

    if (allTrainingCenters) {
        res.status(200).send({ status: "OK", data: allTrainingCenters });
    } else {
        res.status(400).send({ status: "FAILED", data: allTrainingCenters })
    }
};

const getTrainingCenter = async (req, res) => {
    let id = req.params.id;
    try {
        const trainingCenter = await TrainingCenterService.getTrainingCenter(id);
        res.status(200).send({ status: "OK", data: trainingCenter })
    } catch (error) {
        res.status(error.status || 500).send({ status: "FAILED", data: trainingCenter });
    }
};

const createTrainingCenter = async (req, res) => {
    let { name } = req.body;
    const createdTrainingCenter = await TrainingCenterService.createTrainingCenter(name);

    if (createdTrainingCenter) {
        res.status(201).send({ status: "OK", data: createdTrainingCenter });
    } else {
        res.status(400).send({ status: "FAILED", data: createdTrainingCenter });
    }
};

const updateTrainingCenter = async (req, res) => {
    let id = req.params.id;
    let { name } = req.body;
    const updatedTrainingCenter = await TrainingCenterService.updateTrainingCenter(id, name);

    if (updatedTrainingCenter) {
        res.status(200).send({ status: "OK", data: updatedTrainingCenter });
    } else {
        res.status(400).send({ status: "FAILED", data: updatedTrainingCenter });
    }
};

const deleteTrainingCenter = async (req, res) => {
    let id = req.params.id;
    const deletedTrainingCenter = await TrainingCenterService.deleteTrainingCenter(id);

    if (deletedTrainingCenter) {
        res.status(200).send({ status: "OK", data: deletedTrainingCenter });
    } else {
        res.status(400).send({ status: "FAILED", data: deletedTrainingCenter });
    }
};

module.exports = {
    getAllTrainingCenters,
    getTrainingCenter,
    createTrainingCenter,
    updateTrainingCenter,
    deleteTrainingCenter
};