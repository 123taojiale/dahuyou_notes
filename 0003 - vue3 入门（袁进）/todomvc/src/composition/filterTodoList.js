import {
  ref,
  computed,
  onMounted,
  onUnmounted
} from "vue";

/**
 * 根据 可见的任务类型（visibilityRef）、任务列表（todosRef） 过滤出可见的任务
 * @param {String} visibilityRef 哪些任务可见
 * @param {Array}} todosRef 人物列表
 * @returns 过滤之后的任务
 */
export const filterTodos = (visibility, todos) => {
  if (visibility === 'completed') { // 显示已完成的
    return todos.filter(item => item.completed);
  } else if (visibility === 'active') { // 显示未完成的
    return todos.filter(item => !item.completed);
  } else { // 显示所有
    return todos;
  }
}

const validHash = ['all', 'active', 'completed']; // 有效的 hash

export default (todosRef) => {
  const visibilityRef = ref("all"); // 默认所有任务可见

  const handleHashChange = () => {
    const hash = location.hash.replace(/#\/?/, "");
    if (!validHash.includes(hash)) {
      location.hash = ""; // 若得到的是无效的 hash，那么将当前的 hash 值置空
    } else {
      visibilityRef.value = hash;
    }
  }

  handleHashChange(); // 第一次进入页面时，就判断一遍当前的 hash 值是否有效。

  onMounted(() => {
    window.addEventListener('hashchange', handleHashChange);
  })

  onUnmounted(() => {
    window.removeEventListener('hashchange', handleHashChange);
  })

  const filteredTodoList = computed(() => {
    return filterTodos(visibilityRef.value, todosRef.value)
  });

  // 未完成的任务量
  const remainTodoLength = computed(() => {
    return filterTodos('active', todosRef.value).length;
  });

  const completedTodoLength = computed(() => {
    return filterTodos('completed', todosRef.value).length;
  })

  return {
    visibilityRef,
    filteredTodoList,
    remainTodoLength,
    completedTodoLength,
  }
}