import * as todoStorage from "../utils/todoStorage.js";
import {
  ref,
  watchEffect
} from "vue";

export default function useTodoList() {
  const todoListRef = ref(todoStorage.fetchTodoList());
  window.todoListRef = todoListRef; // 测试
  watchEffect(() => {
    todoStorage.saveTodoList(todoListRef.value);
  });
  return {
    todoListRef,
  };
}