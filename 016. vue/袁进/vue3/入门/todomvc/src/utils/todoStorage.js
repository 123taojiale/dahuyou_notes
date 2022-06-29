// import {ref} from "vue";
const TODO_LIST = 'todoStorage';

/**
 * 获取任务列表
 */
const fetchTodoList = () => {
  const todos = localStorage.getItem(TODO_LIST);
  if (todos) {
    return JSON.parse(todos);
  } else {
    return [];
  }
}

/**
 * 保存 todos 到 localstorage 中
 * @param {*} todos 传入的 todomvc 列表
 */
const saveTodoList = (todos) => {
  localStorage.setItem(TODO_LIST, JSON.stringify(todos));
}

export default {
  fetchTodoList,
  saveTodoList,
}