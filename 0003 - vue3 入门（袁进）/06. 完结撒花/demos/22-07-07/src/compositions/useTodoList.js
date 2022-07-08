// 数据列表数据
// 1. 提供一个响应式的任务列表数据
// 2. 监听任务列表数据的变更，一旦数据发生变化，那么立刻保存任务列表数据
import {
  fetchTodoList,
  saveTodoList
} from "../utils/todoListStore";
import {
  ref,
  watchEffect
} from "vue";

export default () => {
  // 1
  const todoListRef = ref(fetchTodoList());

  // 2
  watchEffect(() => {
    saveTodoList(todoListRef.value);
  });

  return {
    todoListRef,
  }
}