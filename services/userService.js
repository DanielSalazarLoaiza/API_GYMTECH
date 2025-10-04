const db = require('../models');

const getAllUsers = async () => {
    try {
        let users = await db.user.findAll({
            include: [{
                model: db.role,
                attributes: ['name'],
                as: 'rol'
            }]
        });
        return users;
    } catch (error) {
        return error.message || "Error al obtener los usuarios";
    }
};

const getUser = async (id) => {
    try {
        let user = await db.user.findByPk(id, {
            include: [{
                model: db.role,
                attributes: ['name'],
                as: 'rol'
            }]
        });
        return user;
    } catch (error) {
        throw { status: 500, message: error.message || "Error al obtener el usuario" };
    }
};

const createUser = async (data) => {
    try {
        let newUser = await db.user.create({
            name: data.name, 
            documentType: data.documentType,
            document: data.document,
            birthdate: data.birthdate,
            email: data.email,
            gender: data.gender,
            status: data.status,
            phone: data.phone,
            eps: data.eps,
            blood_type: data.blood_type,
            weight: data.weight,
            stature: data.stature,
            emergency_phone: data.emergency_phone,
            password: data.password,
            observations: data.observations,
            id_role: data.id_role,
            id_group: data.id_group,
            id_trainingcenter: data.id_trainingcenter
        });
        return newUser;
    } catch (error) {
        return error.message || "Error al crear el usuario";
    }
};

const updateUser = async (id, data) => {
    try {
        let updatedUser = await db.user.update(
            {
                name: data.name, 
                documentType: data.documentType,
                document: data.document,
                birthdate: data.birthdate,
                email: data.email,
                gender: data.gender,
                status: data.status,
                phone: data.phone,
                eps: data.eps,
                blood_type: data.blood_type,
                weight: data.weight,
                stature: data.stature,
                emergency_phone: data.emergency_phone,
                password: data.password,
                observations: data.observations,
                id_role: data.id_role,
                id_group: data.id_group,
                id_trainingcenter: data.id_trainingcenter   
            },
            { where: { id: id } }
        );
        return updatedUser;
    } catch (error) {
        return error.message || "Error al actualizar el usuario";
    }
};

const deleteUser = async (id) => {
    try {
        let deletedUser = await db.user.destroy({ where: { id: id } });
        return deletedUser;
    } catch (error) {
        return error.message || "Error al eliminar el usuario";
    }
};

module.exports = {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
};
