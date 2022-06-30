<template>
  <ul class="contact-container">
    <li>
      <a href="">
        <div class="icon">
          <Icon type="github" />
        </div>
        <span class="des">123taojiale</span>
      </a>
    </li>
    <li>
      <a href="">
        <div class="icon">
          <Icon type="email" />
        </div>
        <span class="des">dahuyou_top@163.com</span>
      </a>
    </li>
    <li>
      <a href="">
        <div class="icon">
          <Icon type="qq" />
        </div>
        <span class="des">2326433153</span>
        <div class="pop">
          <img src="../../../assets/qq_qr_code.png" alt="" />
        </div>
      </a>
    </li>
    <li>
      <a href="">
        <div class="icon">
          <Icon type="wx" />
        </div>
        <span class="des">dahuyou</span>
        <div class="pop">
          <img src="../../../assets/wx_qr_code.png" alt="" />
        </div>
      </a>
    </li>
  </ul>
</template>

<style lang="less" scoped>
@import url(~@/styles/var.less);
.contact-container {
  color: @gray;
  padding: 20px;

  li {
    position: relative;
    margin: 14px 0;
  }

  a {
    display: flex;
    align-items: center;
    line-height: 30px;

    .icon {
      font-size: 26px;
      width: 36px;
      flex: none;
    }

    .des {
      font-size: 14px;
    }

    .pop {
      position: absolute;
      left: 0;
      bottom: 35px;
      padding: 15px 20px 25px;
      background-color: #fff;
      border-radius: 5px;

      img {
        width: 150px;
        height: 150px;
        display: block;
      }

      &::after {
        content: "";
        position: absolute;
        bottom: -4px;
        left: 50%;

        width: 8px;
        height: 8px;
        background-color: #fff;

        transform: translateX(-50%) rotate(45deg);
      }

      // 过渡
      transform: scaleY(0);
      transform-origin: center bottom;
      transition: .3s;
    }
  }

  li:hover .pop {
    transform: scaleY(1);
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