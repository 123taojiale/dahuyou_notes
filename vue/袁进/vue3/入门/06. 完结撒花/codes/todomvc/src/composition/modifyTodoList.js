import {
  ref,
  computed
} from "vue";

export default (todoListRef) => {
  const editingTodoRef = ref(null); // 当前正在编辑的 todo
  let originalContent = null; // 修改前的任务内容

  // 开始修改
  const startEdit = (todo) => {
    originalContent = todo.content;
    editingTodoRef.value = todo;
  }

  // 确认修改
  const confirmEdit = (todo) => {
    editingTodoRef.value = null;
    const content = todo.content.trim();
    if (content) {
      todo.content = content;
    } else {
      todoListRef.value.splice(todoListRef.value.indexOf(todo), 1);
    }
  }

  // 取消修改
  const cancelEdit = (todo) => {
    todo.content = originalContent;
    editingTodoRef.value = null;
  }

  // 批量操作
  const allDone = computed({
    get() {
      return todoListRef.value.length !== 0 &&
        todoListRef.value.filter(todo => !todo.completed).length === 0;
    },
    set(newStatus) {
      todoListRef.value.forEach(todo => {
        todo.completed = newStatus;
      })
    }
  });

  return {
    editingTodoRef,
    startEdit,
    confirmEdit,
    cancelEdit,
    allDone
  }
}