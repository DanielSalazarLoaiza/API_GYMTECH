const db = require('../models');

const getAllGroups = async () => {
    try {
        let groups = await db.group.findAll({
            include: [{ 
                model: db.trainingprogram, 
                attributes: ['name'],
                as: 'trainingProgram' }]
        });
        return groups;
    } catch (error) {
        return error.message || "Error al obtener los grupos";
    }
};

const getGroup = async (id) => {
    try {
        let group = await db.group.findByPk(id, {
            include: [{ 
                model: db.trainingprogram, 
                attributes: ['name'],
                as: 'trainingProgram' }]
        });
        return group;
    } catch (error) {
        return error.message || "Error al obtener el grupo";
    }
};

const createGroup = async (data) => {
    try {
        let newGroup = await db.group.create({
            token_number: data.token_number,
            number_aprenttices: data.number_aprenttices,
            status: data.status,
            star_date: data.star_date,
            end_date: data.end_date,
            id_trainingprogram: data.id_trainingprogram
        });
        return newGroup;
    } catch (error) {
        return error.message || "Error al crear el grupo";
    }
};

const updateGroup = async (id, data) => {
    try {
        let updatedGroup = await db.group.update({
            token_number: data.token_number,
            number_aprenttices: data.number_aprenttices,
            status: data.status,
            star_date: data.star_date,
            end_date: data.end_date,
            id_trainingprogram: data.id_trainingprogram
        },
        {
            where: { id: id }
        }
    );
        return updatedGroup;
    } catch (error) {
        return error.message || "Error al actualizar el grupo";
    }
};

const deleteGroup = async (id) => {
    try {
        let deletedGroup = await db.group.destroy({ where: { id: id } });
        return deletedGroup;
    } catch (error) {
        return error.message || "Error al eliminar el grupo";
    }
};

module.exports = {
    getAllGroups,
    getGroup,
    createGroup,
    updateGroup,
    deleteGroup
};