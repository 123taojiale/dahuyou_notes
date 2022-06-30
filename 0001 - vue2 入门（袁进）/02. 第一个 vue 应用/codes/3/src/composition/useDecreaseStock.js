// 减少库存
export default () => {
  const decreaseStock = (project, newStock) => {
    if (newStock < 0) return;
    project.stock --;
  }
  return {
    decreaseStock
  }
}