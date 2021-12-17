<template>
  <div class="container">
    <form class="left">
      <div class="form-item">
        <label>账号</label>
        <!-- .trim 去掉收尾空白 -->
        <input type="text" v-model.trim="formData.loginId" />
      </div>
      <div class="form-item">
        <label>密码</label>
        <input
          type="password"
          v-model="formData.loginPwd"
          autocomplete="new-password"
        />
      </div>
      <div class="form-item">
        <label>爱好</label>
        <label>
          <!-- 复选框，只要 value 的值，存在 formatDate.loves 数组中，那么这一项就是选中状态。 -->
          <input type="checkbox" value="sports" v-model="formData.loves" />
          运动
        </label>
        <label>
          <input type="checkbox" value="movie" v-model="formData.loves" />
          电影
        </label>
        <label>
          <input type="checkbox" value="music" v-model="formData.loves" />
          音乐
        </label>
        <label>
          <input type="checkbox" value="other" v-model="formData.loves" />
          其他
        </label>
      </div>
      <div class="form-item">
        性别：
        <label>
          <!-- 单选框不再需要令它们的 name 值都相同了，因为选中状态，是由 vue 在内部帮我们使用 js 来控制的。
          当我们点击 男，那么就会将 formData.sex 赋值为 male
          当我们点击 女，那么就会将 formData.sex 赋值为 female
          哪个复选框的值 与 formData.sex 的值相同，那么就是选中状态。 -->
          <input type="radio" v-model="formData.sex" value="male" />
          男
        </label>
        <label>
          <input type="radio" v-model="formData.sex" value="female" />
          女
        </label>
      </div>
      <div class="form-item">
        <label>年龄</label>
        <!-- 事件修饰符 .number
        如果不加的话，那么默认会转化为 String 类型。
         -->
        <input type="number" v-model.number="formData.age" />
      </div>
      <div class="form-item">
        <label>个人简介</label>
        <!--
        加上 .lazy 事件修饰符之后，表示延迟触发。
        效果相当于 input 变 change
        只有在失去焦点的时候才会重新渲染
         -->
        <textarea v-model.lazy="formData.introduce"></textarea>
      </div>
      <div class="form-item">
        <label>职位</label>
        <select v-model="formData.job">
          <option value="-1">请选择</option>
          <option value="1">前端开发</option>
          <option value="2">后端开发</option>
          <option value="3">全栈开发</option>
          <option value="4">项目经理</option>
        </select>
      </div>
      <div class="form-item">
        <label>
          <input type="checkbox" v-model="formData.remember" />
          记住我的选择
        </label>
      </div>
    </form>
    <div class="right">
      <pre>{{ formData }}
        <!-- {{对象}} 会将对象自动转化为 json 格式 -->
      </pre>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        loginId: "abc",
        loginPwd: "",
        loves: ["sports", "movie", "music", "other"],
        sex: "male",
        age: 18,
        introduce: "我是一只小鸭子呀咿呀咿呀哟\n嘎嘎",
        job: "1",
        remember: false,
      },
    };
  },
};
</script>

<style lang="less">
.container {
  width: 1000px;
  height: 600px;
  border: 1px solid #ccc;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.left,
.right {
  width: 50%;
  box-sizing: border-box;
  padding: 25px;
}
.right {
  border-left: 1px solid #ccc;
  font-size: 16px;
}
.form-item {
  margin-bottom: 15px;

  label {
    margin-right: 5px;
  }

  textarea {
    display: block;
    margin-top: 10px;
    resize: none;
    width: 100%;
    height: 100px;
  }
}
</style>
