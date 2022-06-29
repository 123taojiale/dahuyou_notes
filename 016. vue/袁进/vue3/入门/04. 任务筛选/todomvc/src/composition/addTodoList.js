import {
  ref
} from "vue";

export default function addTodoList(todoListRef) {
  const newTodoRef = ref(""); // 新增的任务内容
  // 新增任务的方法
  const addTodo = () => {
    const todoContent = newTodoRef.value && newTodoRef.value.trim();
    if (!todoContent) {
      alert('内容不能为空，请重新输入。');
      return;
    }
    const todo = {
      id: Math.random().toString(16).substr(2, 4),
      time: Date.now(), // 任务添加的时间点
      completed: false, // 任务是否完成
      content: todoContent, // 任务的内容
    }
    todoListRef.value.push(todo);
    newTodoRef.value = ""; // 清空输入框的值
  }
  return {
    newTodoRef,
    addTodo
  }
}