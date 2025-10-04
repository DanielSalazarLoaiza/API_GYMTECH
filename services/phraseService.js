const db = require('../models');

const getAllPhrases = async () => {
    try {
        let phrases = await db.Phrase.findAll();
        return phrases;
    } catch (error) {
        return error.message || "Error al obtener las frases.";
    }
};

const getPhrase = async (id) => {
    try {
        let phrase = await db.Phrase.findByPk(id);
        return phrase;
    } catch (error) {
        throw { status: 500, message: error.message || "Error al obtener la frase" };
    }
};

const createPhrase = async (name) => {
    try {
        let newPhrase = await db.Phrase.create({ name });
        return newPhrase;
    } catch (error) {
        return error.message || "Error al crear la frase.";
    }
};

const updatePhrase = async (id, name) => {
    try {
        let updatedPhrase = await db.Phrase.update(
            { name },
            { where: { id: id } }
        );
        return updatedPhrase;
    } catch (error) {
        return error.message || "Error al actualizar la frase.";
    }
};

const deletePhrase = async (id) => {
    try {
        let deletedPhrase = await db.Phrase.destroy({ where: { id: id } });
        return deletedPhrase;
    } catch (error) {
        return error.message || "Error al eliminar la frase.";
    }
};

module.exports = {
    getAllPhrases, 
    getPhrase, 
    createPhrase,
    updatePhrase,
    deletePhrase
};