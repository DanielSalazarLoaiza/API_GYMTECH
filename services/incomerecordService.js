const db = require('../models');

const getAllIncomeRecords = async () => {
    try {
        let incomeRecords = await db.incomerecord.findAll({
            include: [
                { 
                    model: db.user, 
                    attributes: ['name', 'document', 'email'],
                    as: 'user' 
                },
                { 
                    model: db.activity,
                    attributes: ['name', 'description'], 
                    as: 'activity' 
                }
            ]
        });
        return incomeRecords;
    } catch (error) {
        return error.message || "Error al obtener los registros de ingresos";
    }
};

const getIncomeRecord = async (id) => {
    try {
        let incomeRecord = await db.incomerecord.findByPk(id, {
            include: [
                { 
                    model: db.user, 
                    attributes: ['name', 'document', 'email'],
                    as: 'user' 
                },
                { 
                    model: db.activity,
                    attributes: ['name', 'description'], 
                    as: 'activity' 
                }
            ]
        });
        return incomeRecord;
    } catch (error) {
        return error.message || "Error al obtener el registro de ingresos";
    }
};

const createIncomeRecord = async (data) => {
    try {
        let newIncomeRecord = await db.incomerecord.create({
            start_date: data.start_date,
            end_date: data.end_date,
            id_user: data.id_user,
            id_activity: data.id_activity,
            id_trainer: data.id_trainer
        });
        return newIncomeRecord;
    } catch (error) {
        return error.message || "Error al crear el registro de ingresos";
    }
};

const updateIncomeRecord = async (id, data) => {
    try {
        let updatedIncomeRecord = await db.incomerecord.update({
            start_date: data.start_date,
            end_date: data.end_date,
            id_user: data.id_user,
            id_activity: data.id_activity,
            id_trainer: data.id_trainer
        }, {
            where: { id: id }
        });
        return updatedIncomeRecord;
    } catch (error) {
        return error.message || "Error al actualizar el registro de ingresos";
    }
};

const deleteIncomeRecord = async (id) => {
    try {
        let deletedIncomeRecord = await db.incomerecord.destroy({
            where: { id: id }
        });
        return deletedIncomeRecord;
    } catch (error) {
        return error.message || "Error al eliminar el registro de ingresos";
    }
};

module.exports = {
    getAllIncomeRecords,
    getIncomeRecord,
    createIncomeRecord,
    updateIncomeRecord,
    deleteIncomeRecord
};