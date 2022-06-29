const TODO_MVC = "todoList"

const fetchTodoList = () => {
  const data = localStorage.getItem(TODO_MVC);
  if (data === null) {
    return [];
  } else {
    return JSON.parse(data);
  }
}

const saveTodoList = (todoList) => {
  localStorage.setItem(TODO_MVC, JSON.stringify(todoList));
}

export {
  fetchTodoList,
  saveTodoList
}