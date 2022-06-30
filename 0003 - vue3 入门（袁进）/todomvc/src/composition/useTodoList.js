import {
  ref,
  watchEffect
} from "vue";
import todoStorage from "../utils/todoStorage";

export default () => {
  const todosRef = ref(todoStorage.fetchTodoList()); // 获取响应式的任务列表数据
    window.todosRef = todosRef; // 测试
    // 当任务列表数据发生变化时，将其同步到 localstorage 中。
  watchEffect(() => {
    todoStorage.saveTodoList(todosRef.value);
  });
  return {
    todosRef
  }
}