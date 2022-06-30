export default (todoListRef) => {
  // 删除单个任务
  const remove = (todo) => {
    const index = todoListRef.value.indexOf(todo);
    if (index !== -1) {
      todoListRef.value.splice(index, 1);
    }
  }

  // 删除所有任务
  const removeAllCompleted = () => {
    todoListRef.value = todoListRef.value.filter(todo => !todo.completed);
  }

  return {
    remove,
    removeAllCompleted,
  }
}