# 1-8. net 模块



## 回顾 http 请求

### 普通模式

<img src="https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20211024193505.png" alt="20211024193505" style="zoom:80%;" />

### 长连接模式

- `Connection: keep-alive`

三次握手、四次挥手，这些事儿操作系统都帮我们做好了，我们只需要关注 「请求」和「响应」 即可。长连接模式和普通模式之间的区别就在于是否有 `Connection: keep-alive`，若是长连接模式，那么就不需要频繁地处理三次握手，四次挥手了，因为连接还没断开。但是，如果是普通模式，那么每次请求、响应，都要走一遍三次握手、四次挥手。



http 协议是建立在 TCP/IP 协议基础上的。三次握手、四次挥手，都是 TCP/IP 协议处理的。而 http 协议仅仅是说明了在 “黄色区域” 数据的格式应该是什么样的。



TCP/IP 协议比 http 协议更加底层，在 TCP/IP 协议中，客服端和服务器之间可以传输任何数据，客服端发出请求后，服务端可以选择响应或不响应，也可以响应多次；两端都有权中断连接。但是，在 http 协议下，就是由客户端发起请求，然后服务端响应请求，一个请求对应一个响应。

<img src="https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20211024192205.png" alt="20211024192205" style="zoom:80%;" />



## 什么是 net 模块





## net 模块的作用

net 是一个通信模块，使用它，可以实现进程间的通信 IPC、网络通信 TCP/IP。

> - IPC，进程之间的通信 IPC，不做介绍，这是后端的范畴。
> - TCP/IP，由于 HTTP 是基于 TCP/IP 的，所以我们可以使用 TCP/IP 来发送 HTTP 请求，只要遵循 HTTP 规范即可。

## 如何使用 net 模块创建一个链接



<img src="https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20211229215904427.png" alt="image-20211229215904427" style="zoom: 50%;" />

```js
const net = require("net"); // 导入内置模块 net
net.createConnection(options[, connectListener]);
// 第一个参数 options 是必填的，用于配置链接的相关信息；
// 第二个参数 connectListener 是选填的，它是一个函数，当接收到服务器返回的数据时被调用；
```



## socket 是什么



## 创建客户端

`net.createConnection(options[, connectListener])`

返回的是一个 socket。socket 是一个特殊的文件，在 node 中表现为一个**双工流**对象，通过向流写入内容的形式来发送数据，通过监听流的内容来获取数据。

![20211024192406](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20211024192406.png)

```js
// options
{
  host: xxx, // => 连接主机的地址
  port: xxx, // => 端口号
}
```

http 协议的默认端口号是 80，但是 TCP/IP 协议，没有默认端口号，我们必须得写明端口号。

## 创建服务器

`net.createServer()`

返回的是一个 server 对象。
- server.listen(port)：监听当前计算机中某个端口。
- server.on("listening", () => {})：开始监听端口后触发的事件。
- server.on("connection", socket => {})：当某个连接到来时，触发该事件，事件的监听函数会得到一个 socket 对象。

<img src="https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20211024193009.png" alt="20211024193009" style="zoom:80%;" />
