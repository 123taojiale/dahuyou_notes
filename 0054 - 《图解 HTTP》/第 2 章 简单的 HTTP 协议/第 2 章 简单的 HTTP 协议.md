# 第 2 章 简单的 HTTP 协议

本章将针对 HTTP 协议结构进行讲解，主要使用 HTTP/1.1 版本。学完这章，想必大家就能理解 HTTP 协议的基础了。

<img src="https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20211230141355641.png" alt="image-20211230141355641" style="zoom:50%;" />

## 2.1 HTTP 协议用于客户端和服务器端之间的通信

HTTP 协议和 TCP/IP 协议族内的其他众多的协议相同，**用于客户端和服务器之间的通信**。请求访问文本或图像等资源的一端称为**客户端**，而提供资源响应的一端称为**服务器端**。



![image-20211230140101670](https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20211230140101670.png)



在两台计算机之间使用 HTTP 协议通信时，在一条通信线路上必定有一端是客户端，另一端则是服务器端。



有时候，按实际情况，两台计算机作为客户端和服务器端的角色有可能会互换。但就仅从一条通信路线来说，服务器端和客户端的角色是确定的，而用 HTTP 协议能够明确区分哪端是客户端，哪端是服务器端。

> - 如何区分「客户端」和「服务端」？
>   - 客户端，发送请求，是要东西的一方；
>   - 服务端，响应请求，是给东西的一方；

## 2.2 通过请求和响应的交换达成通信

![image-20211230140109741](https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20211230140109741.png)



**HTTP 协议规定，请求从客户端发出，最后服务器端响应该请求并返回。**换句话说，肯定是**先从客户端开始建立通信的，服务器端在没有接收到请求之前不会发送响应**。

> HTTP 请求，一定是先由客户端发起的。服务器在接收到来自客户端的请求后，再返回指定的资源。
>
> - 主动的是客户端
> - 被动的是服务端

下面，我们来看一个具体的示例。



![image-20211230142122388](https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20211230142122388.png)

> 上图存在一点小错误，已指出。

```tex
GET /index.htm HTTP/1.1
Host: hackr.jp
```

- 起始行开头的 **GET** 表示请求访问服务器的类型，称为方法（method），也就是我们常说的**请求方式**。

- 随后的字符串 **/index.htm** 指明了请求访问的**资源对象**，也叫做请求 **URI**（request-URI）。

- 最后的 **HTTP/1.1**，即 **HTTP 的版本号**，用来提示客户端使用的 HTTP 协议功能。

综合来看，这段请求内容的意思是：请求访问某台 HTTP 服务器上的 /index.htm 页面资源。



### HTTP 请求报文的组成

请求报文是由请求方法、请求 URI、协议版本、**可选的**请求首部字段和内容实体构成的。



![image-20211230174931784](https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20211230174931784.png)

```
POST /form/entry HTTP/1.1
HOST: hackr.jp
Connection: keep-alive
Content-Type: application/x-www-form-urlencoded
Content-Length: 16

name=urno&age=37
```



> - 请求行，Request Line，包含以下信息
>   - 请求方式
>   - 请求的资源 URI
>   - http 版本
> - 请求头，Request Headers，记录对该请求的一些描述信息，确保服务器能返回正确的响应
> - 请求体，Request Body

请求首部字段及内容实体稍后会作详细说明。接下来，我们继续讲解。**接收到请求的服务器，会将请求内容的处理结果以响应的形式返回。**

### HTTP 响应报文的组成

```
HTTP/1.1 200 OK
Date: Tue, 10 Jul 2012 06:50:15 GMT
Content-Length: 362
Content-Type: text/html

<html> ……
```

- 在起始行开头的 `HTTP/1.1` 表示服务器对应的 HTTP 版本。
- 紧挨着的 `200 OK` 表示请求的处理结果的**状态码**和**原因短语**。
- `Date: Tue, 10 Jul 2012 06:50:15 GMT` 显示了创建响应的日期时间，是**首部字段**内的一个属性。
- `Content-Length: 362` 表示发送给接收方的资源实体的主体的大小是 362 个字节。
- `Content-Type: text/html` 表示消息的内容类型是一段 html 格式的文本。
- 接着以一空行分隔，之后的内容称为**资源实体的主体**。

响应报文基本上由协议版本、状态码（表示请求成功或失败的数字代码）、用以解释状态码的原因短语、**可选的**响应首部字段以及**实体主体**构成。稍后我们会对这些内容进行详细说明。



![image-20211230181238759](https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20211230181238759.png)

> - 状态码，status code
> - 原因短语，reason-phrase，对状态码进行解释说明
> - 首部字段，header field，响应头
> - 资源实体的主体，entity body，响应体

## 2.3 HTTP 是不保存状态的协议

**HTTP 是一种不保存状态，即无状态（stateless）协议。**HTTP 协议自身不对请求和响应之间的通信状态进行保存。也就是说**在 HTTP 这个级别，协议对于发送过的请求或响应都不做持久化处理。**



![image-20211230140156654](https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20211230140156654.png)



使用 HTTP 协议，每当有新的请求发送时，就会有对应的新响应产生。协议本身并**不保留**之前一切的请求或响应报文的信息。**这是为了更快地处理大量事务，确保协议的可伸缩性，而特意把 HTTP 协议设计成如此简单的。**



可是，**随着 Web 的不断发展，因无状态而导致业务处理变得棘手的情况增多了**。比如，用户登录到一家购物网站，即使他跳转到该站的其他页面后，也需要能继续**保持登录状态**。针对这个实例，网站为了能够掌握是谁送出的请求，需要保存用户的状态。



HTTP/1.1 虽然是无状态协议，但为了实现期望的「保持状态的功能」，于是引入了 **Cookie 技术**。有了 Cookie 再用 HTTP 协议通信，就可以管理状态了。有关 Cookie 的详细内容稍后讲解。

> - 为啥 HTTP 要做成无状态的协议？
>   - 这是为了更快地处理大量事务，确保协议的可伸缩性，而特意把 HTTP 协议设计成如此简单的。
> - HTTP 这种无状态的特性，导致了什么问题？该问题的常见解决方式是？
>   - 导致的问题：无法实现「保持状态的功能」
>   - 常见的解决方式：使用 Cookie

## 2.4 请求 URI 定位资源

HTTP 协议使用 URI 定位互联网上的资源。正是因为 URI 的特定功能，在互联网上任意位置的资源都能访问到。

### HTTP 协议使用 URI 让客户端定位到资源

![image-20211230140204267](https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20211230140204267.png)



当客户端想要访问资源而发送请求时，URI 需要将作为请求报文中的请求 URI 包含在内。指定请求 URI 的方式有很多。

- 以 http://hackr.jp/index.htm 作为请求的例子
![image-20211230140216856](https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20211230140216856.png)

### 非特定资源 *

除此之外，如果**不是访问特定资源而是对服务器本身发起请求**，可以用一个 `*` 来代替请求 URI。下面这个例子是查询 HTTP 服务器端支持的 HTTP 方法种类。

```
OPTIONS * HTTP/1.1
```

## 2.5 告知服务器意图的 HTTP 方法

下面，我们介绍 HTTP/1.1 中可使用的方法。

- **GET**
- **POST**
- PUT
- HEAD
- **DELETE**
- OPTIONS
- TRACE
- CONNECT

### GET：获取资源

- GET 方法用来请求访问**已被 URI 识别的资源**。

指定的资源经服务器端解析后返回响应内容。也就是说，如果请求的资源是文本，那就保持原样返回；如果是像 CGI 那样的程序，则返回经过执行后的输出结果。

> - CGI，Common Gateway Interface，通用网关接口，即：接口

- 使用GET方法的请求·响应的例子
  ![image-20211230140226436](https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20211230140226436.png)
  <img src="https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20211230151331110.png" alt="image-20211230151331110" style="zoom:50%;" />
  <img src="https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20211230151341224.png" alt="image-20211230151341224" style="zoom:50%;" />

### POST：传输实体主体

- POST 方法用来传输实体的主体。

> 这里说的实体主体，指的是请求体。

- 虽然用 GET 方法也可以传输实体的主体，但一般不用 GET 方法进行传输，而是用 POST 方法。（GET 可以干 POST 的事）

- 虽说 POST 的功能与 GET 很相似，但 POST 的主要目的并不是获取响应的主体内容。（POST 可以干 GET 的事）

> 这句话的意思是说，GET 和 POST 其实很类似，有一些事儿，并非只能使用 GET 或 POST 来做，其实使用它们都能做。但是，按照规范，我们应该：
>
> - 在**获取**数据的时候使用 **GET** 方式
> - 在**创建**数据的时候使用 **POST** 方式

- 使用 POST 方法的请求·响应的例子
  <img src="https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20211230140246475.png" alt="image-20211230140246475" style="zoom:80%;" />
  <img src="https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20211230151349400.png" alt="image-20211230151349400" style="zoom:50%;" />

### PUT：传输文件

- PUT 方法用来传输文件。

就像 FTP 协议的文件上传一样，要求**在请求报文的主体中包含文件内容**，然后保存到请求 URI 指定的位置。

> 在请求报文的主体中包含文件内容：表示将文件内容包含在请求体中上传。

但是，鉴于 **HTTP/1.1 的 PUT 方法自身不带验证机制**，任何人都可以上传文，存在安全性问题，因此**一般的 Web 网站不使用该方法**。若配合 Web 应用程序的验证机制，或架构设计采用 REST 标准的同类 Web 网站，就可能会开放使用 PUT 方法。

- 使用PUT方法的请求·响应的例子
  <img src="https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20211230140302332.png" alt="image-20211230140302332" style="zoom:80%;" />
  <img src="https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20211230151415814.png" alt="image-20211230151415814" style="zoom:50%;" />

> - REST，Representational State Transfer，表征状态转移 [百度百科](https://baike.baidu.com/item/rest/6330506)
>   - 对于 REST 并不了解，查阅相关资料后，大致了解到它是一种编写后端接口的「风格」，按照这种「风格」来写接口，接口会显得更加简洁，更有助于后期维护。

### HEAD：获得报文首部

- HEAD 方法和 GET 方法一样，只是**不返回报文主体部分**。
  
  用于**确认 URI 的有效性及资源更新的日期时间**等。
  <img src="https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20211230140312332.png" alt="image-20211230140312332" style="zoom:80%;" />
  
- 使用 HEAD 方法的请求**·**响应的例子
  <img src="https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20211230151424106.png" alt="image-20211230151424106" style="zoom:50%;" />

### DELETE：删除文件

- DELETE 方法用来删除文件，是与 PUT 相反的方法。

DELETE 方法按请求 URI 删除指定的资源。但是，HTTP/1.1 的 DELETE 方法本身和 PUT 方法一样不带验证机制，所以一般的 Web 网站也不使用 DELETE 方法。当配合 Web 应用程序的验证机制，或遵守 REST 标准时还是有可能会开放使用的。



<img src="https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20211230140323430.png" alt="image-20211230140323430" style="zoom:80%;" />

- 使用 **DELETE** 方法的请求**·**响应的例子
  <img src="https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20211230151439136.png" alt="image-20211230151439136" style="zoom:50%;" />

### OPTIONS：询问支持的方法

OPTIONS 方法用来查询针对请求 URI 指定的资源支持的方法。



![image-20211230140331125](https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20211230140331125.png)



- 使用 **OPTIONS** 方法的请求**·**响应的例子
  <img src="https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20211230151445921.png" alt="image-20211230151445921" style="zoom:50%;" />

### TRACE：追踪路径

TRACE 方法是让 Web 服务器端将之前的请求通信环回给客户端的方法。



发送请求时，在 Max-Forwards 首部字段中填入数值，每经过一个服务器端就将该数字减 1，当数值刚好减到 0 时，就停止继续传输，最后接收到请求的服务器端则返回状态码 `200 OK` 的响应。



客户端通过 TRACE 方法可以**查询发送出去的请求是怎样被加工修改/篡改的**。这是因为，请求想要连接到源目标服务器可能会通过代理中转，TRACE 方法就是用来确认连接过程中发生的一系列操作。



但是，TRACE 方法本来就不怎么常用，再加上它容易引发 XST（Cross-SiteTracing，跨站追踪）攻击，通常就更不会用到了。



![image-20211230140343141](https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20211230140343141.png)



- 使用TRACE方法的请求·响应的例子
  <img src="https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20211230171607876.png" alt="image-20211230171607876" style="zoom:50%;" />

### CONNECT：要求用隧道协议连接代理

CONNECT 方法要求在与代理服务器通信时建立隧道，实现用隧道协议进行 TCP 通信。主要使用 SSL 和 TLS 协议把通信内容加密后经网络隧道传输。

- CONNECT 方法的格式如下所示。

  CONNECT 代理服务器名:端口号 HTTP 版本
  <img src="https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20211230140350369.png" alt="image-20211230140350369" style="zoom:80%;" />

- 使用CONNECT方法的请求·响应的例子
  ![image-20220101172338308](https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20220101172338308.png)

> - SSL，Secure Sockets Layer，安全套接层（协议）
>
> - TLS，Transport Layer Security，传输层安全（协议）
>
> 这俩协议还不了解，它们的作用应该是用来解决数据传输过程中的安全性问题。

## 2.6 使用方法下达命令

向请求 URI 指定的资源发送请求报文时，采用称为方法的命令。



方法的作用在于，可以指定请求的资源按期望产生某种行为。方法中有 GET、POST 和 HEAD 等。

![image-20211230140400179](https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20211230140400179.png)



下表列出了 HTTP/1.0 和 HTTP/1.1 支持的方法。另外，方法名区分大小写，注意要用**大写字母**。



![image-20220101173148300](https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20220101173148300.png)



在这里列举的众多方法中，LINK 和 UNLINK 已被 HTTP/1.1 废弃，不再支持。

## 2.7 持久连续节省通信量

HTTP 协议的初始版本中，每进行一次 HTTP 通信就要断开一次 TCP 连接。



![image-20220101173515175](https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20220101173515175.png)



以当年的通信情况来说，因为都是些容量很小的文本传输，所以及时这样也没有多大问题。可随着 HTTP 的普及，文档中包含大量图片的情况多了起来。



比如，使用浏览器浏览一个包含多张图片的 HTML 页面时，在发送请求访问 HTML 页面资源的同时，也会请求该 HTML 页面里包含的其他资源。因此，每次的请求都会造成无谓的 TCP 连接建立和断开，增加通信量的开销。



![image-20211230140428857](https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20211230140428857.png)



### 2.7.1 持久连接

为解决上述 TCP 连接的问题，HTTP/1.1 和 HTTP/1.0 想出了**持久连接**的方法。持久连接的特点是，只要任意一端没有明确提出断开连接，则保持 TCP 连接状态。

> - 持久连接，HTTP Persistent Connections，也称为 HTTP `keep-alive` 或 HTTP connection reuse
>
> keep-alive 也就是我们常说的「长连接」，在请求头和响应头中可以查看该连接是否是长链接。
>
> <img src="https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20220101210047373.png" alt="image-20220101210047373" style="zoom:50%;" />

- 图：持久连接旨在建立 1 次 TCP 连接后进行多次请求和响应的交互
  ![image-20211230140450089](https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20211230140450089.png)

#### 长连接的作用

持久连接的好处在于减少了 TCP 连接的重复建立和断开所造成的额外开销，**减轻了服务器端的负载**。另外，减少开销的那部分时间，使 HTTP 请求和响应能够更早地结束，这样 **Web 页面的显示速度也就相应地提高**了。

> - 减轻服务器负载
> - 提高页面响应速度

#### 长连接的前提

在 HTTP/1.1 中，所有的连接默认都是持久连接，但在 HTTP/1.0 内，并未标准化。虽然有一部分服务器通过非标准的手段实现了持久连接，但服务器端不一定能够支持持久连接。毫无疑问，除了服务器端，客户端也需要支持持久连接。

> - 客户端支持长连接
> - 服务器端支持长连接

### 2.7.2 管线化

#### 管线化的作用

持久连接使得多数请求以管线化（pipelining）方式发送成为可能。从前发送请求后需等待并收到响应，才能发送下一个请求。管线化技术出现后，不用等待响应亦可直接发送下一个请求。



这样就能够做到同时并行发送多个请求，而不需要一个接一个地等待响应了。



![image-20211230140507869](https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20211230140507869.png)



比如，当请求一个包含 10 张图片的 HTML Web 页面，与挨个连接相比，用持久连接可以让请求更快结束。而管线化技术则比持久连接还要快。请求数越多，时间差就越明显。

## 2.8 使用 Cookie 的状态管理

### HTTP 是无状态协议

HTTP 是无状态协议，它不对之前发生过的请求和响应的状态进行管理。也就是说，无法根据之前的状态进行本次的请求处理。

### 无状态导致的问题

假设要求登录认证的 Web 页面本身无法进行状态的管理（不记录已登录的状态），那么每次跳转新页面不是要再次登录，就是要在每次请求报文中附加参数来管理登录状态。

### 无状态带来的优势

不可否认，无状态协议当然也有它的优点。由于不必保存状态，自然可减少服务器的 CPU 及内存资源的消耗。从另一侧面来说，也正是因为 HTTP 协议本身是非常简单的，所以才会被应用在各个场景里。



- 图：如果让服务器管理全部客户端状态则会成为负担
  ![image-20211230140517671](https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20211230140517671.png)

### Cookie 技术解决的问题

保留无状态协议这个特征的同时，又要解决类似的矛盾问题，于是引入了 Cookie 技术。Cookie 技术通过在请求和响应报文中写入 Cookie 信息来控制客户端的状态。

### Cookie 的工作原理

- Cookie 会根据从服务端发送的响应报文内的一个叫做 Set-Cookie 的首部字段信息，通知客户端保存 Cookie。

- 当下次客户端再往服务器发送请求时，客户端会自动在请求报文中加入 Cookie 值后发送出去。

服务器端发现客户端发送过来的 Cookie 后，会去检查究竟是从哪一个客户端发来的连接请求，然后对比服务器上的记录，最后得到之前的状态信息。



- 没有 Cookie 信息状态下的请求
  ![image-20211230140524967](https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20211230140524967.png)

- 第 2 次以后（存有 Cookie 信息状态）的请求
  ![image-20211230140533535](https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20211230140533535.png)

上图展示了发送 Cookie 交互的场景，HTTP 请求报文和响应报文的内容如下。



1. 请求报文（没有 Cookie 信息的状态）

```tex
GET /reader/ HTTP/1.1
Host: hackr.jp
*首部字段内没有 Cookie 的相关信息
```

2. 响应报文（服务器生成 Cookie 信息）

```tex
HTTP/1.1 200 OK
Date: Thu, 12 Jul 2012 07:12:20 GMT
Server: Apache
<Set-Cookie: sid=1342077140226724; path=/; expires=Web, 10-Oct-12 07:12:20 GMT>
Content-Type: text/plain; charset=UTF-8
```

3. 请求报文（自动发送保存着的 Cookie 信息）

```tex
GET /image/ HTTP/1.1
Host: hackr.jp
Cookie: sid=1342077140226724
```

有关本章请求报文和响应报文内 Cookie 对应的首部字段，请参考之后的章节。
