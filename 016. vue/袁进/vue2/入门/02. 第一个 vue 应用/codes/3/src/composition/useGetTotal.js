import {
  computed
} from "vue";

// 获取总库存
export default (productList) => {
  const total = computed(() => productList.value.reduce((sum, project) => sum + project.stock, 0));
  return {
    total,
  }
}