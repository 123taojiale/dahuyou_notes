// import {
//   ref
// } from "vue";

import {
  filterTodos
} from "./filterTodoList";

export default (todosRef) => {
  const removeTodo = (todo) => {
    const index = todosRef.value.indexOf(todo);
    if (index > -1) {
      todosRef.value.splice(index, 1);
    }
  }

  // 清除所有已完成的任务
  const removeAllDone = () => {
    todosRef.value = filterTodos('active', todosRef.value);
  }

  return {
    removeTodo,
    removeAllDone
  };
}