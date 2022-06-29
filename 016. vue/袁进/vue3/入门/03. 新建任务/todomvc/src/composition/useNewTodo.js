import {
  ref
} from "vue";

import generateId from "../util/generateId";

export default (todoListRef) => {
  const newTodoRef = ref("");

  const addNewTodo = (content) => {
    content = content.trim();
    if (content === "") return;
    const todo = {
      id: generateId(),
      content,
      completed: false,
    }
    todoListRef.value.push(todo);
    newTodoRef.value = "";
  }

  return {
    newTodoRef,
    addNewTodo
  }
}