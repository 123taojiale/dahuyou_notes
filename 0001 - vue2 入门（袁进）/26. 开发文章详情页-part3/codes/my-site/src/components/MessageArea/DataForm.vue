<template>
  <!-- @submit 当用户按下回车键时，也会提交评论。
  当表单被提交时，默认会刷新页面，为了不刷新页面，可以加上一个事件描述符 .prevent
  .prevent 用于阻止事件的默认行为。
  因为这里我们想要使用 ajax 的方式来提交，不想使用传统的 form 表单提交数据的形式来
  提交（设置 action、method 属性来提交）。 -->
  <form id="data-form-container" class="data-form-container" @submit.prevent="handleSubmit" ref="form">
    <div class="form-item">
      <div class="input-area">
        <input
          maxlength="10"
          type="text"
          placeholder="用户昵称"
          v-model="formData.nickname"
        />
        <span class="tip">{{ formData.nickname.length }}/10</span>
      </div>
      <div class="error">{{ error.nickname }}</div>
    </div>
    <div class="form-item">
      <div class="text-area">
        <textarea
          maxlength="300"
          placeholder="输入内容"
          v-model="formData.comment"
        ></textarea>
        <span class="tip">{{ formData.comment.length }}/300</span>
      </div>
      <div class="error">{{ error.comment }}</div>
    </div>
    <div class="form-item">
      <div class="button-area">
        <button :disabled="isSubmiting">
          {{ isSubmiting ? "提交中..." : "提交" }}
        </button>
        <!-- 表单中的 button 默认就是提交按钮
        type 属性的默认值就是 submit type="submit"
        当 button 被点击时，就会调用 handleSubmit 事件处理函数。 -->
      </div>
    </div>
  </form>
</template>

<style lang="less" scoped>
@import url(~@/styles/var.less);
.data-form-container {
  margin-bottom: 20px;
  overflow: hidden;
  position: relative;

  .form-item {
    margin-bottom: 8px;

    .input-area,
    .text-area {
      position: relative;
    }

    .input-area {
      width: 50%;
    }
  }
}

input,
textarea {
  width: 100%;
  border: 1px dashed @gray;
  box-sizing: border-box;
  border-radius: 4px;
  // display: block;
  font-size: 14px;
  color: @words;
  &:focus {
    border-color: @primary;
  }
}

input {
  height: 40px;
  padding: 0 15px;
}

textarea {
  resize: none;
  height: 120px;
  padding: 8px 15px;
}

.tip {
  position: absolute;
  right: 5px;
  bottom: 5px;
  color: @gray;
  font-size: 12px;
}

.error {
  margin-top: 6px;
  color: @danger;
  font-size: 14px;
  height: 20px;
  line-height: 20px;
}

button {
  position: relative;
  cursor: pointer;
  width: 100px;
  height: 34px;
  border-radius: 4px;
  background-color: @primary;
  color: #fff;

  &:hover {
    background-color: darken(@primary, 10%);
  }

  &:disabled {
    background-color: lighten(@primary, 20%);
    cursor: not-allowed;
  }
}
</style>

<script>
export default {
  data() {
    return {
      isSubmiting: false, // 是否正在提交评论
      error: {
        nickname: "",
        comment: "",
      },
      formData: {
        nickname: "",
        comment: "",
      },
    };
  },
  methods: {
    handleSubmit() {
      // 开始提交表单数据
      this.error.nickname = this.formData.nickname ? "" : "请输入昵称";
      this.error.comment = this.formData.comment ? "" : "请输入评论";
      if (this.error.nickname || this.error.comment) {
        // 有错误
        return;
      }
      this.isSubmiting = true;
      // 正在提交
      this.$emit("submit", this.formData, (successMsg) => {
        this.$showMessage({
          content: successMsg,
          type: "success",
          duration: 1000,
          container: this.$refs.form,
          cb: () => {
            this.isSubmiting = false;
            this.formData.nickname = "";
            this.formData.comment = "";
          },
        });
      });
    },
  },
};
</script>