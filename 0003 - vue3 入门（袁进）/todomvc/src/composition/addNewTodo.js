import {
  ref,
} from "vue";

export default (todosRef) => {
  const newTodoContentRef = ref(""); // 新增的任务内容

  const increaseNewTodo = () => {
    const todo = {
      id: Math.random().toString(16).substr(2, 4), // 任务id
      time: Date.now(), // 任务添加的时间戳
      content: newTodoContentRef.value, // 任务内容
      completed: false, // 任务是否完成
    }
    todosRef.value.push(todo); // 将任务推送至任务列表中
    newTodoContentRef.value = ""; // 清空新增任务的输入框
  }

  return {
    newTodoContentRef,
    increaseNewTodo
  }
}