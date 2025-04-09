const taskServices = require('../services/tasks');

async function create(req, res) {
    try {
        const { title, description } = req.body;
        const newTask = await taskServices.create(title, description);
        return res.status(201).json({
            message: `A seguinte tarefa foi criada: ${newUser[0].name}`,
        });
    } catch (error) {
        return res.status(400).json({
            message: "Erro ao criar usuário!",
            error: error.message
        })
    }
}

async function list(req, res) {
    try {
        const { id } = req.params;
        const listTask = taskServices.list(id);
        return res.status(201).json(`O usuário encontrado é ${listTask}`)
    } catch (error) {
        return res.status(404).json({ error: "Usuário não encontrado." })
    }
}

module.exports = {
    create,
    list,
};