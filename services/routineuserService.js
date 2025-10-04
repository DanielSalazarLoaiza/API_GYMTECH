const db = require('../models');

getAllRoutineUsers = async () => {
    try {
        let routineUsers = await db.routineuser.findAll({
            include: [
                {
                    model: db.user,
                    as: 'user',
                    attributes: ['id', 'name', 'email']
                },
                {
                    model: db.routine,
                    as: 'routine',
                    attributes: ['id', 'name', 'description']
                }
            ]
        });
        return routineUsers;
    } catch (error) {
        return error.message || "Error al obtener los usuarios con rutinas";
    }
};

getRoutineUser = async (id) => {
    try {
        let routineUser = await db.routineuser.findByPk(id, {
            include: [
                {
                    model: db.user,
                    as: 'user',
                    attributes: ['id', 'name', 'email']
                },
                {
                    model: db.routine,
                    as: 'routine',
                    attributes: ['id', 'name', 'description']
                }
            ]
        });
        return routineUser;
    } catch (error) {
        return error.message || "Error al obtener el usuario con rutina";
    }
};

const createRoutineUser = async (data) => {
    try {
        let newRoutineUser = await db.routineuser.create({
            id_user: data.id_user,
            id_routine: data.id_routine
        });
        return newRoutineUser;
    } catch (error) {
        return error.message || "Error al crear el usuario con rutina";
    }
};

const updateRoutineUser = async (id, data) => {
    try {
        let updatedRoutineUser = await db.routineuser.update({
            id_user: data.id_user,
            id_routine: data.id_routine
        }, {
            where: {
                id: id
            }
        });
        return updatedRoutineUser;
    } catch (error) {
        return error.message || "Error al actualizar el usuario con rutina";
    }
};

const deleteRoutineUser = async (id) => {
    try {
        let deletedRoutineUser = await db.routineuser.destroy({
            where: {
                id: id
            }
        });
        return deletedRoutineUser;
    } catch (error) {
        return error.message || "Error al eliminar el usuario con rutina";
    }
};

module.exports = {
    getAllRoutineUsers,
    getRoutineUser,
    createRoutineUser,
    updateRoutineUser,
    deleteRoutineUser
};
