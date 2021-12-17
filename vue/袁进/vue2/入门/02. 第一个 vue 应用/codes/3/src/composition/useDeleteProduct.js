// 删除商品
export default (productListRef) => {
  const deleteProduct = (i) => {
    console.log(i);
    productListRef.value.splice(i, 1);
  }
  return {
    deleteProduct
  }
}