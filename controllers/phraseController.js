const PhraseService = require('../services/phraseService');

const getAllPhrases = async (req, res) => {
    const allPhrases = await PhraseService.getAllPhrases();

    if (allPhrases) {
        res.status(200).send({ status: "OK", data: allPhrases });
    } else {
        res.status(400).send({ status: "FAILED", data: allPhrases });
    }
};

const getPhrase = async (req, res) => {
    let id = req.params.id;
    try {
        const phrase = await PhraseService.getPhrase(id);
        res.status(200).send({ status: "OK", data: phrase });
    } catch (error) {
        res.status(error.status || 500).send({ status: "FAILED", data: { error: error.message } });
    }
};

const createPhrase = async (req, res) => {
    let { name } = req.body;
    const createdPhrase = await PhraseService.createPhrase(name);

    if (createPhrase) {
        res.status(201).send({ status: "OK", data: createPhrase });
    } else {
        res.status(400).send({ status: "FAILED", data: createPhrase });
    }
};

const updatePhrase = async (req, res) => {
    let id = req.params.id;
    let { name } = req.body;
    const updatedPhrase = await PhraseService.updatePhrase(id, name);

    if (updatedPhrase) {
        res.status(200).send({ status: "OK", data: updatedPhrase });
    } else {
        res.status(400).send({ status: "FAILED", data: updatedPhrase });
    }
};

const deletePhrase = async (req, res) => {
    let id = req.params.id;
    const deletedPhrase = await PhraseService.deletePhrase(id);

    if (deletedPhrase) {
        res.status(200).send({ status: "OK", data: deletedPhrase });
    } else {
        res.status(400).send({ status: "FAILED", data: deletedPhrase });
    }
};

module.exports = {
    getAllPhrases,
    getPhrase,
    createPhrase,
    updatePhrase,
    deletePhrase
};