<template>
  <div class="titleBar" style="-webkit-app-region: drag;-webkit-user-select: none;user-select: none;">
    <div class="title" ref="title">
      <div class="logo" ref="logo">
        <img src="@/assets/dahuyou.jpeg" alt="logo">
      </div>
      <div class="txt" ref="txt">标题栏标题</div>
    </div>
    <div class="windowTool">
      <div @click="windowControl('minimize')">
        <i class="iconfont" :class="iconfontMap.min"></i>
      </div>
      <div v-if="!isMaxSize" @click="windowControl('maximize')">
        <i class="iconfont" :class="iconfontMap.max"></i>
      </div>
      <div v-else @click="windowControl('restore')">
        <i class="iconfont" :class="iconfontMap.restore"></i>
      </div>
      <div @click="windowControl('close')" class="close">
        <i class="iconfont" :class="iconfontMap.close"></i>
      </div>
    </div>
  </div>
</template>

<script>
const ipcRenderer = window.ipcRenderer
// const { getCurrentWindow } =  window.require('@electron/remote')
// console.log(getCurrentWindow)

const iconfontMap = {
  min: "icon-2zuixiaohua-2",
  max: "icon-zuidahua",
  restore: "icon-zuixiaohua",
  close: "icon-guanbi"
}

export default {
  data() {
    return {
      title: "标题栏标题",
      iconfontMap,
      isMaxSize: false, // 当前的窗口是否是全屏展示
    }
  },
  methods: {
    windowControl(op = '') {
      if (!op) return
      ipcRenderer.send('tmWinControl', op)
    }
  },
  mounted() {
    // 不等待一会儿再执行的话，事件还没注册好，首次渲染时无效
    setTimeout(() => {
      ipcRenderer.send('tmRestoreWinState') // 恢复窗口的状态
      ipcRenderer.send('tmMonitorWinState') // 监听窗口的状态
    }, 100)
    // ipcRenderer.receive('fmWinControl', res => this.isMaxSize = res)
  },
}
</script>

<style lang="less" scoped>
@import url('https://at.alicdn.com/t/c/font_3570588_n36o0b96tzl.css');

.titleBar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  height: 38px;
  line-height: 36px;
  background-color: #f1f3f4;
  display: flex;
  border-bottom: 1px solid #cccccc;

  /* 坑：得直接写到 titleBar 身上，否则无效
  --webkit-app-region: drag;
  -webkit-user-select: none;
  user-select: none; */
  .title {
    flex: 1;
    display: flex;

    .logo {
      padding-left: 8px;
      padding-right: 6px;

      img {
        width: 20px;
        height: 20px;
        margin-top: 7px;
      }
    }

    .txt {
      text-align: center;
      flex: 1;
    }
  }

  .windowTool {
    cursor: pointer;
    -webkit-app-region: no-drag;

    div {
      color: #888;
      height: 100%;
      width: 38px;
      display: inline-block;

      .iconfont {
        font-size: 12px;
        display: inline-block;
        width: 100%;
        height: 100%;
        transition: all .4s;

        &:hover {
          transform: scale(1.4);
        }
      }

      .close:hover {
        color: #fff;
        background-color: #ff4d4f;
      }
    }
  }
}
</style>