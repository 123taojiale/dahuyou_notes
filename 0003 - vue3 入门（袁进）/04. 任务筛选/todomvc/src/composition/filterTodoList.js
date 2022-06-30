import {
  ref,
  onMounted,
  onUnmounted,
  computed
} from "vue";

const filter = (todos, visibility) => {
  if (visibility === 'completed') {
    return todos.filter(todo => todo.completed);
  } else if (visibility === 'active') {
    return todos.filter(todo => !todo.completed);
  } else {
    return todos;
  }
}

const validHash = ['all', 'active', 'completed'];

export default (todoListRef) => {
  const visibilityRef = ref("all"); // 默认所有任务可见

  const handleHashChange = () => {
    const hash = location.hash.replace(/#\/?/, '');
    if (!validHash.includes(hash)) {
      location.hash = '';
      visibilityRef.value = 'all';
    } else {
      visibilityRef.value = hash;
    }
  }

  onMounted(() => {
    window.addEventListener('hashchange', handleHashChange);
  });

  onUnmounted(() => {
    window.removeEventListener('hashchange', handleHashChange);
  });

  const filteredTodoList = computed(() => {
    return filter(todoListRef.value, visibilityRef.value);
  });

  // 未完成的任务量
  const remainingTodoLen = computed(() => {
    return filter(todoListRef.value, 'active').length;
  });

  // 已完成的任务量
  const completedTodoLen = computed(() => {
    return filter(todoListRef.value, 'completed').length;
  })

  return {
    visibilityRef,
    filteredTodoList,
    remainingTodoLen,
    completedTodoLen
  }
}