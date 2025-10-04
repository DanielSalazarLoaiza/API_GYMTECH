const GroupService = require('../services/groupService');

const getAllGroups = async (req, res) => {
    const allGroups = await GroupService.getAllGroups();

    if (allGroups) {
        res.status(200).send({ status: "OK", data: allGroups });
    } else {
        res.status(400).send({ status: "FAILED", data: allGroups });
    }
};

const getGroup = async (req, res) => {
    let id = req.params.id;
    try {
        const group = await GroupService.getGroup(id);
        res.status(200).send({ status: "OK", data: group });
    } catch (error) {
        res.status(400).send({ status: "FAILED", data: error.message });
    }
};

const createGroup = async (req, res) => {
    let { token_number, number_aprenttices, status, star_date, end_date, id_trainingprogram } = req.body;
    const createdGroup = await GroupService.createGroup({
        token_number,
        number_aprenttices,
        status,
        star_date,
        end_date,
        id_trainingprogram
    });

    if (createdGroup) {
        res.status(201).send({ status: "OK", data: createdGroup });
    } else {
        res.status(400).send({ status: "FAILED", data: createdGroup });
    }
};

const updateGroup = async (req, res) => {
    let id = req.params.id;
    let { token_number, number_aprenttices, status, star_date, end_date, id_trainingprogram } = req.body;

    const updatedGroup = await GroupService.updateGroup(id, {
        token_number,
        number_aprenttices,
        status,
        star_date,
        end_date,
        id_trainingprogram
    });

    if (updatedGroup) {
        res.status(200).send({ status: "OK", data: updatedGroup });
    } else {
        res.status(400).send({ status: "FAILED", data: updatedGroup });
    }
};

const deleteGroup = async (req, res) => {
    let id = req.params.id;
    const deletedGroup = await GroupService.deleteGroup(id);

    if (deletedGroup) {
        res.status(200).send({ status: "OK", data: deletedGroup });
    } else {
        res.status(400).send({ status: "FAILED", data: deletedGroup });
    }    
};

module.exports = {
    getAllGroups,
    getGroup,
    createGroup,
    updateGroup,
    deleteGroup
};