<template>
  <ul class="contact-container">
    <li>
      <a href="https://github.com/123taojiale">
        <Icon type="github" />
        <span>123taojiale</span>
      </a>
    </li>
    <li>
      <a href="mailto:dahuyou_top@163.com">
        <Icon type="email" />
        <span>dahuyou_top@163.com</span>
      </a>
    </li>
    <li>
      <a
        href="tencent://message/?Menu=yes&uin=2326433153&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45"
      >
        <Icon type="qq" />
        <span>2326433153</span>
        <div class="pop">
          <img src="../../../assets/qq_qr_code.png" />
        </div>
      </a>
    </li>
    <li>
      <a>
        <Icon type="wx" />
        <span>15157722155</span>
        <div class="pop">
          <img src="../../../assets/wx_qr_code.png" />
        </div>
      </a>
    </li>
  </ul>
</template>

<style lang="less" scoped>
@import url(~@/styles/var.less);

.contact-container {
  padding: 20px;
  list-style: none;

  li {
    position: relative;
    margin: 14px 0;
    color: @gray;
    cursor: pointer;

    // 过渡
    &:hover {
      .pop {
        transform: scaleY(1);
      }
    }

    a {
      display: flex;
      align-items: center;
      line-height: 30px;

      // 图标
      .icon-container {
        font-size: 26px;
        width: 36px;
        flex: none;
      }
      // 弹出层
      .pop {
        position: absolute;
        left: 0;
        bottom: 35px;
        padding: 20px 25px 30px;
        background-color: #fff;
        border-radius: 5px;

        // 过渡
        transform: scaleY(0);
        transform-origin: center bottom;
        transition: 0.3s;

        // 图片
        img {
          width: 140px;
          height: 140px;
          display: block;
        }

        // 箭头
        &::after {
          content: "";
          width: 8px;
          height: 8px;
          background-color: #fff;

          position: absolute;
          left: 50%;
          bottom: -4px;
          transform: translateX(-50%) rotate(45deg);
        }
      }
    }
  }
}
</style>

<script>
import Icon from "@/components/Icon";

export default {
  components: {
    Icon,
  },
};
</script>