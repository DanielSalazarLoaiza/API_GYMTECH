const MuscleGroupService = require('../services/musclegroupService');

const getAllMuscleGroups = async (req, res) => {
    const allMuscleGroups = await MuscleGroupService.getAllMuscleGroups();

    if (allMuscleGroups) {
        res.status(200).send({ status: "OK", data: allMuscleGroups });
    } else {
        res.status(400).send({ status: "FAILED", data: allMuscleGroups });
    }
};

const getMuscleGroup = async (req, res) => {
    let id = req.params.id;
    try {
        const musclegroup = await MuscleGroupService.getMuscleGroup(id);
        res.status(200).send({ status: "OK", data: musclegroup });
    } catch (error) {
        res.status(error.status || 500).send({ status: "FAILED", data: { error: error.message } });
    }
};

const createMuscleGroup = async (req, res) => {
    let { name, image } = req.body;
    const createdMuscleGroup = await MuscleGroupService.createMuscleGroup(name, image);

    if (createdMuscleGroup) {
        res.status(201).send({ status: "OK", data: createdMuscleGroup });
    } else {
        res.status(400).send({ status: "FAILED", data: createdMuscleGroup });
    }
};

const updateMuscleGroup = async (req, res) => {
    let id = req.params.id;
    let { name, image } = req.body;
    const updatedMuscleGroup = await MuscleGroupService.updateMuscleGroup(id, name, image);

    if (updatedMuscleGroup) {
        res.status(200).send({ status: "OK", data: updatedMuscleGroup });
    } else {
        res.status(400).send({ status: "FAILED", data: updatedMuscleGroup });
    }
};

const deleteMuscleGroup = async (req, res) => {
    let id = req.params.id;
    const deletedMuscleGroup = await MuscleGroupService.deleteMuscleGroup(id);

    if (deletedMuscleGroup) {
        res.status(200).send({ status: "OK", data: deletedMuscleGroup });
    } else {
        res.status(400).send({ status: "FAILED", data: deletedMuscleGroup });
    }
};

module.exports = {
    getAllMuscleGroups,
    getMuscleGroup,
    createMuscleGroup,
    updateMuscleGroup,
    deleteMuscleGroup
};