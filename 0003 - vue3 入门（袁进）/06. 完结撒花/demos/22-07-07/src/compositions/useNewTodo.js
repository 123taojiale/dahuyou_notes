// 新增任务
// 1. 提供一个响应式数据 input 框绑定
// 2. 提供一个事件，当用户按下回车后触发，若输入的任务能够通过校验，那么新增该任务

import {ref} from "vue";
import generateId from "../utils/generateId.js";

export default (todoListRef) => {
  // 1
  const newTodoRef = ref("");
  // window.newTodoRef = newTodoRef; // 测试

  // 2
  const addTodo = () => {
    let title = newTodoRef.value.trim(); // 任务标题 - 去掉首尾空格
    if (!title) return;

    // 创建新的任务对象
    const todoObj = {
      title, // 任务标题
      id: generateId(), // 随机生成一个任务 id
      completed: false, // 任务是否完成
    }
    newTodoRef.value = ""; // 清空输入框
    todoListRef.value.push(todoObj); // 更新任务列表
  }

  return {
    newTodoRef,
    addTodo,
  }
}