// 修改任务

import {
  ref
} from "vue";
import filterTodoList from "../utils/filterTodoList";

export default (todoListRef) => {
  const editingTodoRef = ref(null); // 当前正在编辑的 todo
  let originTodoTitle = ""; // 修改之前的任务内容

  // 处理编辑
  const handleEditing = (todo) => {
    originTodoTitle = todo.title;
    editingTodoRef.value = todo; // 修改当前正在编辑的 todo
  }

  // 结束编辑
  const handleEditDone = (todo) => {
    // 如果将内容全部删完，那么相当于是删除任务
    if (todo.title === '') {
      todoListRef.value = todoListRef.value.filter(item => item.id !== todo.id);
    }
    editingTodoRef.value = null; // 当前没有正处于编辑状态的任务项
  }

  // 取消编辑
  const handleCancelEdit = (todo) => {
    editingTodoRef.value = null;
    todo.title = originTodoTitle;
  }

  // 删除所有已完成的任务
  const removeAllCompleted = () => {
    todoListRef.value = filterTodoList(todoListRef.value, 'active');
  }

  // 删除指定的任务
  const removeTodo = (todo) => {
    console.log('remove', todo);
    todoListRef.value.splice(todoListRef.value.indexOf(todo), 1);
  }

  // 批量选中
  const handleSelectAll = (op, checked) => {
    if (op === 'get') return todoListRef.value.length === filterTodoList(todoListRef.value, 'completed').length; // 所有任务都完成 - 选中；有一个任务未完成 - 不选中
    if (op === 'set') todoListRef.value.forEach(item => item.completed = checked);
  }
  // 补充：批量选中的效果，使用计算属性来写会更加合适，具体代码实现可以参考袁进老师的版本

  return {
    editingTodoRef,
    handleEditing,
    handleEditDone,
    handleCancelEdit,
    removeAllCompleted,
    removeTodo,
    handleSelectAll
  }
}