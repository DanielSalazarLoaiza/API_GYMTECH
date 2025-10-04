const db = require('../models');

const getAllMuscleGroups = async () => {
    try {
        let musclegroups = await db.musclegroup.findAll();
        return musclegroups;
    } catch (error) {
        return error.message || "Error al obtener los grupos musculares";
    }
};

const getMuscleGroup = async (id) => {
    try {
        let musclegroup = await db.musclegroup.findByPk(id);
        return musclegroup;
    } catch (error) {
        throw { status: 500, message: error.message || "Error al obtener el grupo muscular" };
    }
};  

const createMuscleGroup = async (name, image) => {
    try {
        let newMuscleGroup = await db.musclegroup.create({ name, image });
        return newMuscleGroup;
    } catch (error) {
        return error.message || "Error al crear el grupo muscular";
    }
};

const updateMuscleGroup = async (id, name, image) => {
    try {
        let updatedMuscleGroup = await db.musclegroup.update(
            { name, image },
            { where: { id: id } }
        );
        return updatedMuscleGroup;
    } catch (error) {
        return error.message || "Error al actualizar el grupo muscular";
    }
};

const deleteMuscleGroup = async (id) => {
    try {
        let deletedMuscleGroup = await db.musclegroup.destroy({ where: { id: id } });
        return deletedMuscleGroup;
    } catch (error) {
        return error.message || "Error al eliminar el grupo muscular";
    }
};

module.exports = {
    getAllMuscleGroups,
    getMuscleGroup,
    createMuscleGroup,
    updateMuscleGroup,
    deleteMuscleGroup
};