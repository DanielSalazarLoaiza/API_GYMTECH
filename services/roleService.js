const db = require('../models');

const getAllRoles = async () => {
    try {
        let roles = await db.role.findAll({
            include: [{
                model: db.user,
                attributes: ['name', 'email'],
                as: 'users'
            }]
        });
        return roles;
    } catch (error) {
        return error.message || "Error al obtener los roles";
    }
};

const getRole = async (id) => {
    try {
        let role = await db.role.findByPk(id, {
            include: [{
                model: db.user,
                attributes: ['name', 'email'],
                as: 'users'
            }]
        });
        return role;
    } catch (error) {
        throw { status: 500, message: error.message || "Error al obtener el rol" };
    }
};

const createRole = async (name) => {
    try {
        let newRole = await db.role.create({ name });
        return newRole;
    } catch (error) {
        return error.message || "Error al crear el rol";
    }
};

const updateRole = async (id, name) => {
    try {
        let updatedRole = await db.role.update(
            { name },
            { where: { id: id } }
        );
        return updatedRole;
    } catch (error) {
        return error.message || "Error al actualizar el rol";
    }
};

const deleteRole = async (id) => {
    try {
        let deletedRole = await db.role.destroy({ where: { id: id } });
        return deletedRole;
    } catch (error) {
        return error.message || "Error al eliminar el rol";
    }
};

module.exports = {
    getAllRoles,
    getRole,
    createRole,
    updateRole,
    deleteRole
};
