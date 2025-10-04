const db = require('../models');

const getAllApprenticeReserves = async () => {
    try {
        let apprenticeReserves = await db.apprenticereserves.findAll({
            include: [
                { 
                    model: db.user, 
                    as: 'user' 
                },
                { 
                    model: db.calendar, 
                    as: 'calendar' 
                }
            ]
        });
        return apprenticeReserves;
    } catch (error) {
        return error.message || "Error al obtener las reservas de aprendices";
    }
};

const getApprenticeReserve = async (id) => {
    try {
        let apprenticeReserve = await db.apprenticereserves.findByPk(id, {
            include: [
                { 
                    model: db.user, 
                    as: 'user' 
                },
                { 
                    model: db.calendar, 
                    as: 'calendar' 
                }
            ]
        });
        return apprenticeReserve;
    } catch (error) {
        throw { status: 500, message: error.message || "Error al obtener la reserva de aprendiz" };
    }
};

const createApprenticeReserve = async (data) => {
    try {
        let newApprenticeReserve = await db.apprenticereserves.create({
            id_user: data.id_user,
            id_calendar: data.id_calendar,
            entry_time: data.entry_time,
            departure_time: data.departure_time,
            reservation_date: data.reservation_date
        });
        return newApprenticeReserve;
    } catch (error) {
        return error.message || "Error al crear la reserva de aprendiz";
    }
};

const updateApprenticeReserve = async (id, data) => {
    try {
        let updatedApprenticeReserve = await db.apprenticereserves.update(
            {
                id_user: data.id_user,
                id_calendar: data.id_calendar,
                entry_time: data.entry_time,
                departure_time: data.departure_time,
                reservation_date: data.reservation_date
            },
            {
                where: { id: id }
            }
        );
        return updatedApprenticeReserve;
    } catch (error) {
        return error.message || "Error al actualizar la reserva de aprendiz";
    }
};

const deleteApprenticeReserve = async (id) => {
    try {
        let deletedApprenticeReserve = await db.apprenticereserves.destroy({
            where: { id: id }
        });
        return deletedApprenticeReserve;
    } catch (error) {
        return error.message || "Error al eliminar la reserva de aprendiz";
    }
};

module.exports = {
    getAllApprenticeReserves,
    getApprenticeReserve,
    createApprenticeReserve,
    updateApprenticeReserve,
    deleteApprenticeReserve
};
