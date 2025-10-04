const ActivityService = require('../services/activityService');

const getAllActivities = async (req, res) => {
    const allActivities = await ActivityService.getAllActivities();

    if (allActivities) {
        res.status(200).send({ status: "OK", data: allActivities });
    } else {
        res.status(400).send({ status: "FAILED", data: allActivities });
    }
};

const getActivity = async (req, res) => {
    let id = req.params.id;
    try {
        const activity = await ActivityService.getActivity(id);
        res.status(200).send({ status: "OK", data: activity });
    } catch (error) {
        res.status(error.status || 500).send({ status: "FAILED", data: { error: error.message } });
    }
};

const createActivity = async (req, res) => {
    let { name, description } = req.body;
    const createdActivity = await ActivityService.createActivity(name, description);

    if (createdActivity) {
        res.status(201).send({ status: "OK", data: createdActivity });
    } else {
        res.status(400).send({ status: "FAILED", data: createdActivity });
    }
};

const updateActivity = async (req, res) => {
    let id = req.params.id;
    let { name, description } = req.body;
    const updatedActivity = await ActivityService.updateActvity(id, name, description);

    if (updatedActivity) {
        res.status(200).send({ status: "OK", data: updatedActivity });
    } else {
        res.status(400).send({ status: "FAILED", data: updatedActivity });
    }
};

const deleteActivity = async (req, res) => {
    let id = req.params.id;
    const deletedActivity = await ActivityService.deleteActivity(id);

    if (deletedActivity) {
        res.status(200).send({ status: "OK", data: deletedActivity });
    } else {
        res.status(400).send({ status: "FAILED", data: deletedActivity });
    }
};

module.exports = {
    getAllActivities,
    getActivity,
    createActivity,
    updateActivity,
    deleteActivity
};