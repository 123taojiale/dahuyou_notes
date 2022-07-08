// 读写 todolist

const LOCAL_KEY = '__todolist'

/**
 * 获取任务列表数据
 * @returns 任务列表数据
 */
export function fetchTodoList() {
  const list = localStorage.getItem(LOCAL_KEY);
  return list ? JSON.parse(list) : [];
}

/**
 * 存储任务列表
 * @param {*} todolist 任务列表数据
 */
export function saveTodoList(todolist) {
  localStorage.setItem(LOCAL_KEY, JSON.stringify(todolist));
}