const ProgressControlService = require('../services/progresscontrolService');

const getAllProgressControls = async (req, res) => {
    const allProgressControls = await ProgressControlService.getAllProgressControls();

    if (allProgressControls) {
        res.status(200).send({ status: "OK", data: allProgressControls });
    } else {
        res.status(400).send({ status: "FAILED", data: allProgressControls });
    }
};

const getProgressControl = async (req, res) => {
    let id = req.params.id;
    const progressControl = await ProgressControlService.getProgressControl(id);

    if (progressControl) {
        res.status(200).send({ status: "OK", data: progressControl });
    } else {
        res.status(400).send({ status: "FAILED", data: progressControl });
    }
};

const createProgressControl = async (req, res) => {
    let { date_completion, peso, waist, hip, right_thigh, left_thigh, right_arm, left_arm, right_forearm, left_forearm, right_calf, left_calf, medical_examination, observations, exam_date, id_user } = req.body;
    const createdProgressControl = await ProgressControlService.createProgressControl({
        date_completion,
        peso,
        waist,
        hip,
        right_thigh,
        left_thigh,
        right_arm,
        left_arm,
        right_forearm,
        left_forearm,
        right_calf,
        left_calf,
        medical_examination,
        observations,
        exam_date,
        id_user
    });

    if (createdProgressControl) {
        res.status(201).send({ status: "OK", data: createdProgressControl });
    } else {
        res.status(400).send({ status: "FAILED", data: createdProgressControl });
    }
};

const updateProgressControl = async (req, res) => {
    let id = req.params.id;
    let { date_completion, peso, waist, hip, right_thigh, left_thigh, right_arm, left_arm, right_forearm, left_forearm, right_calf, left_calf, medical_examination, observations, exam_date, id_user } = req.body;
    const updatedProgressControl = await ProgressControlService.updateProgressControl(id, {
        date_completion,
        peso,
        waist,
        hip,
        right_thigh,
        left_thigh,
        right_arm,
        left_arm,
        right_forearm,
        left_forearm,
        right_calf,
        left_calf,
        medical_examination,
        observations,
        exam_date,
        id_user
    });

    if (updatedProgressControl) {
        res.status(200).send({ status: "OK", data: updatedProgressControl });
    } else {
        res.status(400).send({ status: "FAILED", data: updatedProgressControl });
    }
};

const deleteProgressControl = async (req, res) => {
    let id = req.params.id;
    const deletedProgressControl = await ProgressControlService.deleteProgressControl(id);

    if (deletedProgressControl) {
        res.status(200).send({ status: "OK", data: deletedProgressControl });
    } else {
        res.status(400).send({ status: "FAILED", data: deletedProgressControl });
    }
};

module.exports = {
    getAllProgressControls,
    getProgressControl,
    createProgressControl,
    updateProgressControl,
    deleteProgressControl
};