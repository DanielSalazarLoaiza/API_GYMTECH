const RoleService = require('../services/roleService');

const getAllRoles = async (req, res) => {
    const allRoles = await RoleService.getAllRoles();

    if (allRoles)
        res.status(200).send({ status: "OK", data: allRoles });
    else
        res.status(400).send({ status: "FAILED", data: allRoles }); 
};

const getRole = async (req, res) => {
    let id = req.params.id;
    try {
        const role = await RoleService.getRole(id);
        res.status(200).send({ status: "OK", data: role });
    } catch (error) {
        res.status(error.status || 500).send({ status: "FAILED", data: { error: error.message } });
    }
};

const createRole = async (req, res) => {
    let { name } = req.body;
    const createdRole = await RoleService.createRole(name);

    if (createdRole)
        res.status(201).send({ status: "OK", data: createdRole });
    else
        res.status(400).send({ status: "FAILED", data: createdRole });
};

const updateRole = async (req, res) => {
    let id = req.params.id;
    let { name } = req.body;
    const updatedRole = await RoleService.updateRole(id, name);

    if (updatedRole) 
        res.status(200).send({ status: "OK", data: updatedRole });
    else
        res.status(400).send({ status: "FAILED", data: updatedRole });
};

const deleteRole = async (req, res) => {
    let id = req.params.id;
    const deletedRole = await RoleService.deleteRole(id);

    if (deletedRole) 
        res.status(200).send({ status: "OK", data: deletedRole });
    else
        res.status(400).send({ status: "FAILED", data: deletedRole });
};

module.exports = {
    getAllRoles,
    getRole,
    createRole,
    updateRole,
    deleteRole
};
