const { randomUUID } = require("crypto");

const tasks = [];

async function create(title, description) {
  try {
    const newTask = {
      id: randomUUID(),
      title,
      description,
      completed_at,
      created_at,
      updated_at
    };

    tasks.push(newTask);

    return tasks;
  } catch (error) {
    console.log("Erro ao tentar criar uma nova tarefa: " + error);
  }
}

async function list(id) {
  try {
    const task = tasks.find(task => task.id === id);
    return task;
  } catch (error) {
    console.log("Erro ao buscar tarefa: " + error);
  }
}

module.exports = {
  create,
  list
};
