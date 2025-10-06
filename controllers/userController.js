const UserService = require('../services/userService');

const getAllUsers = async (req, res) => {
    const allUsers = await UserService.getAllUsers();

    if (allUsers)
        res.status(200).send({ status: "OK", data: allUsers });
    else
        res.status(400).send({ status: "FAILED", data: allUsers });
};

const getUser = async (req, res) => {
    let id = req.params.id;
    try {
        const user = await UserService.getUser(id);
        res.status(200).send({ status: "OK", data: user });
    } catch (error) {
        res.status(error.status || 500).send({ status: "FAILED", data: { error: error.message } });
    }
};

const createUser = async (req, res) => {
    let { name, picture, documentType, document, birthdate, email, gender, status, phone, eps, blood_type, weight, stature, emergency_phone, password, observations, id_role, id_group, id_trainingcenter } = req.body;
    const createdUser = await UserService.createUser({
        name,
        picture,
        documentType,
        document,
        birthdate,
        email,
        gender,
        status,
        phone,
        eps,
        blood_type,
        weight,
        stature,
        emergency_phone,
        password,
        observations,
        id_role,
        id_group,
        id_trainingcenter
    });

    if (createdUser)
        return res.status(201).send({ status: "OK", data: createdUser });
    else
        res.status(400).send({ status: "FAILED", data: createdUser });
};

const updateUser = async (req, res) => {
    let id = req.params.id;
    let { name, picture, documentType, document, birthdate, email, gender, status, phone, eps, blood_type, weight, stature, emergency_phone, password, observations, id_role, id_group, id_trainingcenter } = req.body;

    const updatedUser = await UserService.updateUser(id, {
        name,
        picture,
        documentType,
        document,
        birthdate,
        email,
        gender,
        status,
        phone,
        eps,
        blood_type,
        weight,
        stature,
        emergency_phone,
        password,
        observations,
        id_role,
        id_group,
        id_trainingcenter
    });

    if (updatedUser)
        return res.status(200).send({ status: "OK", data: updatedUser });
    else
        res.status(400).send({ status: "FAILED", data: updatedUser });
};

const deleteUser = async (req, res) => {
    let id = req.params.id;
    const deletedUser = await UserService.deleteUser(id);

    if (deletedUser)
        res.status(200).send({ status: "OK", data: deletedUser });
    else
        res.status(400).send({ status: "FAILED", data: deletedUser });
};

module.exports = {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
};
