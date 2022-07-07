// 使用任务列表
import { ref, watchEffect } from "vue";
import * as todoStorage from "../utils/todoStorage.js";

export const todosRef = ref(todoStorage.fetchTodoList());

watchEffect(() => {
  todoStorage.saveTodoList(todosRef.value);
});