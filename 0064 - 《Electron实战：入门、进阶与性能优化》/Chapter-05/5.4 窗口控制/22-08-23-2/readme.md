# Description

做了一个极其简陋的 **离开提示**

**🤔 什么情况视作离开页面？**

1. 刷新页面 `Command + R` / `Ctrl + R`
2. 关闭页面 `Command + W` / `Ctrl + W`

**页面**

![](https://raw.githubusercontent.com/123taojiale/dahuyou_picture/main/blogs/202208302053051.png)

**最终效果**

- 点击确定，关闭页面，渲染进程将被销毁
- 点击取消，取消关闭页面

# Bug

**🤔 下面这种写法有什么 bug 呢？**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="./index.css">
  <title>提供离开提示</title>
</head>
<body>
  <div class="leave-tip-model" id="model">
    <div class="leave-tip-container">
      <p class="tip-text" id="text"></p>
      <div class="btn-container">
        <button class="cancel" id="cancel">取消</button>
        <button class="confirm" id="confirm">确定</button>
      </div>
    </div>
  </div>
  <script>
    const { ipcRenderer } = require('electron')
    const { getCurrentWindow } = require('@electron/remote')
    const win = getCurrentWindow()
    // 有效
    // alert(123)
    // confirm(456)
    window.onbeforeunload = () => {
      // 无效
      // alert(123)
      // confirm(456)
      createNotification('确定离开？').then(isDestroy => {
        console.log('isDestroy => ', isDestroy)
        // if (isDestroy) win.destroy()
        // if (isDestroy) ipcRenderer.send('descroyWin')
      })
      return false
    }

    async function createNotification(tip = '系统可能不会保存您所做的更改') {
      const res = new Promise((resolve, reject) => {
        text = tip
        model.style.display = 'flex'

        cancel.onclick = () => {
          console.log('点击了取消')
          model.style.display = 'none'
          resolve(false)
        }
        confirm.onclick = () => {
          console.log('点击了确认')
          model.style.display = 'none'
          resolve(true)
        }
      })
      return res
    }
  </script>
</body>
</html>
```

> 这是 indexError.html 文件中的内容
>
> 也是一开始的时候采用的写法，点击确定后，一直没反应。

原因：`confirm` 是一个内置方法。。。

这是真没注意到，调了好久，最后才发现是这个问题。。。

![](https://raw.githubusercontent.com/123taojiale/dahuyou_picture/main/blogs/202208302058610.png)

其实 vscode 上早就给出提示啦，稍微细心一丢丢，就应该能发现的。

![](https://raw.githubusercontent.com/123taojiale/dahuyou_picture/main/blogs/202208302058142.png)

吃一堑长一智哈，这类低级错误，下次得多注意注意。