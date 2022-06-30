import {
  ref,
  computed
} from "vue";

import {
  filterTodos
} from "./filterTodoList";

export default (todosRef) => {
  const editingTodoRef = ref(null); // 当前正在被编辑的 todo
  let originContent = ''; // 任务内容的初始值

  // 编辑 todo
  const editTodo = (todo) => {
    originContent = todo.content;
    editingTodoRef.value = todo;
  }

  // 取消编辑
  const cancelTodo = (todo) => {
    editingTodoRef.value = null;
    todo.content = originContent;
  }

  // 确认修改
  const updateTodo = (todo, newContent) => {
    editingTodoRef.value = null;
    if (newContent.trim()) {
      // 修改
      todo.content = newContent;
    } else {
      // 删除
      const index = todosRef.value.indexOf(todo);
      if (index !== -1) { // 注意：当触发 input 的 keyup.enter 事件时，同时还会触发 blur 事件。
        todosRef.value.splice(index, 1);
      }
    }
  }

  // 切换所有任务的完成状态
  const allDone = computed({
    get() {
      return filterTodos('active', todosRef.value). length === 0;
    },
    set(checked) {
      todosRef.value.forEach(todo => {
        todo.completed = checked;
      });
    }
  });

  return {
    editingTodoRef,
    editTodo,
    cancelTodo,
    updateTodo,
    allDone
  }
}