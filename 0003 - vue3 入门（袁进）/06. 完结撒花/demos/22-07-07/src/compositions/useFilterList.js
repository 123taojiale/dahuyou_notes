// 提供过滤后的任务列表数据
// 1. 提供一个响应式的 hash
// 2. 提供一个经过过滤后的任务列表
// 3. 提供剩余任务数量
// 4. 提供已完成的任务数量

import {ref, onMounted, onUnmounted, computed} from "vue";
import filterTodoList from "../utils/filterTodoList";

const validHash = ['', 'active', 'completed'];

export default (todoListRef) => {
  // 1
  let hashRef = ref("");

  const handleHashChange = () => {
    const hash = window.location.hash.replace(/#\/?/, "");
    if (!validHash.includes(hash)) window.location.hash = "";
    hashRef.value = hash;
  }

  handleHashChange();
  onMounted(() => window.addEventListener('hashchange', handleHashChange));
  onUnmounted(() => window.removeEventListener('hashchange', handleHashChange));

  // 2
  const filteredList = computed(() => {
    return filterTodoList(todoListRef.value, hashRef.value);
  });

  // 3
  const activeNum = computed(() => {
    return filterTodoList(todoListRef.value, 'active').length;
  });

  // 4
  const completedNum = computed(() => {
    return filterTodoList(todoListRef.value, 'completed').length;
  });

  return {
    hashRef,
    filteredList,
    activeNum,
    completedNum,
  };
}