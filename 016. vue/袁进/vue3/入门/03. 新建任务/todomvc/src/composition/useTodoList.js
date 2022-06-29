import * as todoStorage from "../util/todoStorage.js";
import {
  ref,
  watchEffect
} from "vue";

export default () => {
  const todoListRef = ref(todoStorage.fetchTodoList());
  window.todoListRef = todoListRef;
  watchEffect(() => todoStorage.saveTodoList(todoListRef.value));
  return {
    todoListRef,
  }
}