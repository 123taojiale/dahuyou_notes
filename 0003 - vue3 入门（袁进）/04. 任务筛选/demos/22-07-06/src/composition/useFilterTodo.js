import {
  ref,
  onMounted,
  onUnmounted,
  computed
} from "vue";
import { filterTodoList } from "../utils/todoStorage";

// 有效的 hash 值
const validHash = ['all', 'active', 'completed'];

export default (todosRef) => {
  const visibleRef = ref("all");
  // 1. 监听路由信息的 hash 值的变化，根据 hash 的变化，决定显示的任务的状态
  function handleHashChange() {
    let hash = window.location.hash.replace(/^#\/?/g, "");
    // console.log('监听 hash 值的变化！！！', hash, '是否是一个有效的 hash 值', validHash.includes(hash));
    if (!validHash.includes(hash)) window.location.hash = 'all'; // 非法 hash 通通视作 all
    else visibleRef.value = hash;
  }

  // 组件完成挂载后，开始监听 hash 的变化
  onMounted(() => {
    console.log('onMounted');
    window.addEventListener('hashchange', handleHashChange);
  });

  // 组件注销后， onhashchange
  onUnmounted(() => {
    console.log('onUnmounted');
    window.removeEventListener('hashchange', handleHashChange);
  });

  const filteredTodoListRef = computed(() => {
    return filterTodoList(todosRef.value, visibleRef.value);
  });

  // 未完成的所有任务
  const remainTodoListRef = computed(() => {
    return filterTodoList(todosRef.value, 'active');
  });

  // 已完成的所有任务
  const completedTodoListRef = computed(() => {
    return filterTodoList(todosRef.value, 'completed');
  })

  // console.log('过滤后的任务列表数据：', filteredTodoListRef);

  return {
    visibleRef,
    filteredTodoListRef,
    remainTodoListRef,
    completedTodoListRef,
  }
}