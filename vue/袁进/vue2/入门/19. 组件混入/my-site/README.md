# my-site

- fetchData

```js
// 公共的远程获取数据的代码
// 具体的组件中，需要提供一个远程获取数据的方法 fetchData。在首页 Home 组件中，它就是 getBanners 方法。
export default function (defaultValue = null) {
  // 返回的对象将作为作为最终导入时的混入对象
  return {
    data() {
      return {
        isLoading: true,
        data: defaultValue, // 封装成函数的目的就是为了在混入时，给 data 传递默认值。
      };
    },
    async created() {
      this.data = await this.fetchData();
      this.isLoading = false; // 远程数据请求到了之后，将 isLoading 设置为 false。
    }
  }
}
```
