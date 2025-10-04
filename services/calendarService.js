const db = require('../models');

const getAllCalendars = async () => {
    try {
        let calendars = await db.calendar.findAll({
            include: [
                { 
                    model: db.user, 
                    attributes: ['name'],
                    as: 'users' 
                }
            ]
        });
        return calendars;
    } catch (error) {
        return error.message || "Error al obtener el calendario";
    }
};

const getCalendar = async (id) => {
    try {
        let calendar = await db.calendar.findByPk(id, {
            include: [
                { 
                    model: db.user, 
                    as: 'users' 
                }
            ]
        });
        return calendar;
    } catch (error) {
        throw { status: 500, message: error.message || "Error al obtener el calendario" };
    }
};

const createCalendar = async (data) => {
    try {
        let newCalendar = await db.calendar.create({
            date: data.date,
            start_time: data.start_time,
            end_time: data.end_time,
            id_user: data.id_user,
            max_capicity: data.max_capicity,
            status: data.status
        });
        return newCalendar;
    } catch (error) {
        return error.message || "Error al crear el calendario";
    }
};

const updateCalendar = async (id, data) => {
    try {
        let updatedCalendar = await db.calendar.update(
            {
                date: data.date,
                start_time: data.start_time,
                end_time: data.end_time,
                id_user: data.id_user,
                max_capicity: data.max_capicity,
                status: data.status
            },
            {
                where: { id: id }
            }
        );
        return updatedCalendar;
    } catch (error) {
        return error.message || "Error al actualizar el calendario";
    }
};

const deleteCalendar = async (id) => {
    try {
        let deletedCalendar = await db.calendar.destroy({ where: { id: id } });
        return deletedCalendar;
    } catch (error) {
        return error.message || "Error al eliminar el calendario";
    }
};

module.exports = {
    getAllCalendars,
    getCalendar,
    createCalendar,
    updateCalendar,
    deleteCalendar
};
