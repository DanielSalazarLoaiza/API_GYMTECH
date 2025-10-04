const IncomeRecordService = require('../services/incomerecordService');

const getAllIncomeRecords = async (req, res) => {
    const allIncomeRecords = await IncomeRecordService.getAllIncomeRecords();

    if (allIncomeRecords) {
        res.status(200).send({ status: "OK", data: allIncomeRecords });
    } else {
        res.status(400).send({ status: "FAILED", data: allIncomeRecords });
    }
};

const getIncomeRecord = async (req, res) => {
    let id = req.params.id;
    try {
        const incomeRecord = await IncomeRecordService.getIncomeRecord(id);
        res.status(200).send({ status: "OK", data: incomeRecord });
    } catch (error) {
        res.status(error.status || 500).send({ status: "FAILED", data: { error: error.message } });
    }
};

const createIncomeRecord = async (req, res) => {
    let { start_date, end_date, id_user, id_activity, id_trainer } = req.body;
    const createdIncomeRecord = await IncomeRecordService.createIncomeRecord({
        start_date,
        end_date,
        id_user,
        id_activity,
        id_trainer
    });
    if (createdIncomeRecord) {
        res.status(201).send({ status: "OK", data: createdIncomeRecord });
    } else {
        res.status(400).send({ status: "FAILED", data: createdIncomeRecord });
    }
};

const updateIncomeRecord = async (req, res) => {
    let id = req.params.id;
    let { start_date, end_date, id_user, id_activity, id_trainer } = req.body;
    const updatedIncomeRecord = await IncomeRecordService.updateIncomeRecord(id, {
        start_date,
        end_date,
        id_user,
        id_activity,
        id_trainer
    });
    if (updatedIncomeRecord) {
        res.status(200).send({ status: "OK", data: updatedIncomeRecord });
    } else {
        res.status(400).send({ status: "FAILED", data: updatedIncomeRecord });
    }
};

const deleteIncomeRecord = async (req, res) => {
    let id = req.params.id;
    const deletedIncomeRecord = await IncomeRecordService.deleteIncomeRecord(id);
    if (deletedIncomeRecord) {
        res.status(200).send({ status: "OK", data: deletedIncomeRecord });
    } else {
        res.status(400).send({ status: "FAILED", data: deletedIncomeRecord });
    }
};

module.exports = {
    getAllIncomeRecords,
    getIncomeRecord,
    createIncomeRecord,
    updateIncomeRecord,
    deleteIncomeRecord
};