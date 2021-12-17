// 导入 MyButton 组件
import MyButton from "./components/MyButton.js";

// 组件的模板
const template = `
<div>
  <h1>app component</h1>
  <MyButton />
</div>
`;

export default {
  name: "App", // 定义组件的名称为 App
  template, // 配置 App 组件的模板
  // 局部注册组件 MyButton
  components: {
    MyButton
  }
}