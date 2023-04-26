const todoList = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "todoList function executed successfully!",
        input: event,
      },
      null,
      2
    ),
  };
};

const todo = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "todo function executed successfully!",
        input: event,
      },
      null,
      2
    ),
  };
};

module.exports = {
  todoList,
  todo
}
