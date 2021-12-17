const TODO_MVC = "todo_mvc";

/**
 * 获取 TODO 列表数据
 * @returns TODO 列表数据
 */
export function fetchTodoList() {
  const todoList = localStorage.getItem(TODO_MVC);
  if (!todoList) return [];
  return JSON.parse(todoList);
}

/**
 * 保存任务列表
 * @param {*} todoList 任务列表
 */
export function saveTodoList(todoList) {
  localStorage.setItem(TODO_MVC, JSON.stringify(todoList));
}