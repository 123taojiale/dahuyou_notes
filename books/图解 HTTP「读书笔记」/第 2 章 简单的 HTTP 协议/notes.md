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



- HTTP 协议使用 URI 让客户端定位到资源

  ![image-20211230140204267](https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20211230140204267.png)



当客户端想要访问资源而发送请求时，URI 需要将作为请求报文中的请求 URI 包含在内。指定请求 URI 的方式有很多。



- 以 http://hackr.jp/index.htm 作为请求的例子

  ![image-20211230140216856](https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20211230140216856.png)



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

> 这句话的意思是说，GET 和 POST 其实很类似，有一些事儿，并非只能使用 GET 或 POST 来做，其实使用它们都能做。但是，按照规范
>
> - 在获取数据的时候使用 GET 方式
> - 在创建数据的时候使用 POST 方式

- 使用 POST 方法的请求·响应的例子
  <img src="https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20211230140246475.png" alt="image-20211230140246475" style="zoom:80%;" />
  <img src="https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20211230151349400.png" alt="image-20211230151349400" style="zoom:50%;" />

### PUT：传输文件

- PUT 方法用来传输文件。

就像 FTP 协议的文件上传一样，要求**在请求报文的主体中包含文件内容**，然后保存到请求 URI 指定的位置。



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

CONNECT 方法要求在与代理服务器通信时建立隧道，实现用隧道协议进行 TCP 通信。主要使用 SSL（SecureSocketsLayer，安全套接层）和 TLS（TransportLayerSecurity，传输层安全）协议把通信内容加密后经网络隧道传输。

- CONNECT方法的格式如下所示。

  CONNECT代理服务器名:端口号HTTP版本
  <img src="https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20211230140350369.png" alt="image-20211230140350369" style="zoom:80%;" />

- 使用CONNECT方法的请求·响应的例子
  









## 2.6 使用方法下达命令

![image-20211230140400179](https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20211230140400179.png)

## 2.7 持久连续节省通信量

![image-20211230140421083](https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20211230140421083.png)



![image-20211230140428857](https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20211230140428857.png)



![image-20211230140450089](https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20211230140450089.png)



![image-20211230140507869](https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20211230140507869.png)





## 2.8 使用 Cookie 的状态管理





![image-20211230140517671](https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20211230140517671.png)



![image-20211230140524967](https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20211230140524967.png)



![image-20211230140533535](https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20211230140533535.png)
