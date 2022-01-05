[TOC]



# 第 6 章 HTTP 首部

HTTP 协议的请求和响应报文中必定包含 HTTP 首部，只是我们平时在使用 Web 的过程中感受不到它。本章我们一起来学习 HTTP 首部的结构，以及首部中各字段的用法。



<img src="https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20220103230255457.png" alt="image-20220103230255457" style="zoom:50%;" />



## 6.1 HTTP 报文首部

- 图：HTTP 报文的结构
  <img src="https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20220104102923971.png" alt="image-20220104102923971" style="zoom:50%;" />



HTTP 协议的请求和响应报文中必定包含 HTTP 首部。首部内容为「客户端处理请求」、「服务器处理响应」提供所需要的信息。对于客户端用户来说，这些信息中的大部分都无须亲自查看。



报文首部由几个字段构成。

### HTTP 请求报文

在请求中，HTTP 报文由方法、URI、HTTP 版本、HTTP 首部字段等部分构成。

- 图：HTTP 请求报文
  <img src="https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20220104102935311.png" alt="image-20220104102935311" style="zoom:80%;" />

下面的示例是访问 http://hackr.jp 时，请求报文的首部信息。



<img src="https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20220104131636863.png" alt="image-20220104131636863" style="zoom:50%;" />

### HTTP 响应报文

在响应中，HTTP 报文由 HTTP 版本、状态码（数字和原因短语）、HTTP 首部字段 3 部分构成。

- 图：HTTP 响应报文
  <img src="https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20220104102947534.png" alt="image-20220104102947534" style="zoom:80%;" />

以下示例是之前请求访问 http://hackr.jp 时，返回的响应报文的首部信息。



<img src="https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20220104140234850.png" alt="image-20220104140234850" style="zoom:50%;" />



在报文众多的字段当中，HTTP 首部字段包含的信息最为丰富。首部字段同时存在于请求和响应报文内，并涵盖 HTTP 报文相关的内容信息。



因 HTTP 版本或扩展规范的变化，首部字段可支持的字段内容略有不同。本书主要涉及 HTTP/1.1 及常用的首部字段。

## 6.2 HTTP 首部字段



### 6.2.1 HTTP 首部字段传递重要信息



HTTP 首部字段是构成 HTTP 报文的要素之一。在客户端与服务器之间以 HTTP 协议进行通信的过程中，无论是请求还是响应都会使用首部字段，它能起到**传递额外重要信息**的作用。



使用首部字段是为了给浏览器和服务器提供

- 报文主体大小
- 所使用的语言
- 认证信息
- 。。。等内容



- 图：首部字段内可使用的附加信息较多
  <img src="https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20220104102958324.png" alt="image-20220104102958324" style="zoom:80%;" />



### 6.2.2 HTTP 首部字段结构



HTTP 首部字段是由首部字段名和字段值构成的，中间用冒号“:”分隔。



`首部字段名: 字段值`



例如，在 HTTP 首部中以 Content-Type 这个字段来表示报文主体的对象类型。



`Content-Type: text/html`



就以上述示例来看，首部字段名为 Content-Type，字符串 text/html 是字段值。



另外，字段值对应单个 HTTP 首部字段**可以有多个值**，如下所示。



`Keep-Alive: timeout=15, max=100`



> - 若 HTTP 首部字段重复了会如何？当 HTTP 报文首部中出现了两个或两个以上具有相同首部字段名时会怎么样？
>
> 这种情况在规范内尚未明确，**根据浏览器内部处理逻辑的不同，结果可能并不一致**。有些浏览器会优先处理第一次出现的首部字段，而有些则会优先处理最后出现的首部字段。

### 6.2.3 4 种 HTTP 首部字段类型



HTTP首部字段根据实际用途被分为以下 4 种类型。

- 通用首部字段（**General Header Fields**）
  **请求报文和响应报文两方都会使用的首部。**

- 请求首部字段（**Request Header Fields**）
  **从客户端向服务器端发送请求报文时使用的首部。**补充了请求的附加内容、客户端信息、响应内容相关优先级等信息。
- 响应首部字段（**Response Header Fields**）
  **从服务器端向客户端返回响应报文时使用的首部。**补充了响应的附加内容，也会要求客户端附加额外的内容信息。
- 实体首部字段（**Entity Header Fields**）
  **针对请求报文和响应报文的实体部分使用的首部。**补充了资源内容更新时间等与实体有关的信息。

### 6.2.4 HTTP/1.1 首部字段一览



HTTP/1.1 规范定义了如下 47 种首部字段。



#### 表 6-1：通用首部字段

| 首部字段名        | 说明                       |
| ----------------- | -------------------------- |
| Cache-Control     | 控制缓存的行为             |
| Connection        | 逐跳首部、连接的管理       |
| Date              | 创建报文的日期时间         |
| Pragma            | 报文指令                   |
| Trailer           | 报文末端的首部一览         |
| Transfer-Encoding | 指定报文主体的传输编码方式 |
| Upgrade           | 升级为其他协议             |
| Via               | 代理服务器的相关信息       |
| Warning           | 错误通知                   |

#### 表 6-2：请求首部字段

| 首部字段名          | 说明                                            |
| ------------------- | ----------------------------------------------- |
| Accept              | 用户代理可处理的媒体类型                        |
| Accept-Charset      | 优先的字符集                                    |
| Accept-Encoding     | 优先的内容编码                                  |
| Accept-Language     | 优先的语言（自然语言）                          |
| Authorization       | Web 认证信息                                    |
| Expect              | 期待服务器的特定行为                            |
| From                | 用户的电子邮箱地址                              |
| **Host**            | 请求资源所在服务器                              |
| If-Match            | 比较实体标记（Etag）                            |
| If-Modified-Since   | 比较资源的更新时间                              |
| If-None-Match       | 比较实体标记（与 If-Match 相反）                |
| If-Range            | 资源未更新时发送实体 Byte 的范围请求            |
| If-Unmodified-Since | 比较资源的更新时间（与 If-Modified-Since 相反） |
| Max-Forwards        | 最大传输逐跳数                                  |
| Proxy-Authorization | 代理服务器要求客户端的认证信息                  |
| Range               | 实体的字节范围请求                              |
| Referer             | 对请求中 URI 的原始获取方                       |
| TE                  | 传输编码的优先级                                |
| User-Agent          | HTTP 客户端程序的信息                           |

#### 表 6-3：响应首部字段

| 首部字段名         | 说明                         |
| ------------------ | ---------------------------- |
| Accept-Ranges      | 是否接受字节范围请求         |
| Age                | 推算资源创建经过时间         |
| Etag               | 资源的匹配信息               |
| Location           | 令客户端重定向至指定 URI     |
| Proxy-Authenticate | 代理服务器对客户端的认证信息 |
| Retry-After        | 对再次发起请求的时机要求     |
| Server             | HTTP 服务器的安装信息        |
| Vary               | 代理服务器缓存的管理信息     |
| WWW-Authenticate   | 服务器服客户端的认证信息     |

#### 表 6-4：实体首部字段

| 首部字段名         | 说明                         |
| ------------------ | ---------------------------- |
| Allow              | 资源可支持的 HTTP 方法       |
| Content-Encoding   | 实体主体适用的编码方式       |
| Content-Language   | 实体主体的自然语言           |
| **Content-Length** | 实体主体的大小（单位：字节） |
| Content-Location   | 替代对应资源的 URI           |
| Content-MD5        | 实体主体的报文摘要           |
| Content-Range      | 实体主体的位置范围           |
| **Content-Type**   | 实体主体的媒体类型           |
| Expires            | 实体主体过期的日期时间       |
| Last-Modified      | 资源的最后修改日期时间       |

### 6.2.5 非 HTTP/1.1 首部字段



在 HTTP 协议通信交互中使用到的首部字段，不限于 RFC2616 中定义的 47 种首部字段。还有 **Cookie**、Set-Cookie 和 Content-Disposition 等在其他 RFC 中定义的首部字段，它们的使用频率也很高。



这些非正式的首部字段统一归纳在 RFC4229 HTTP Header Field Registrations 中。

### 6.2.6 End-to-end 首部和 Hop-by-hop 首部



HTTP 首部字段将定义成**缓存代理**和**非缓存代理**的行为，分成 2 种类型。



- 端到端首部（**End-to-end Header**）
  分在此类别中的首部会**转发给请求/响应对应的最终接收目标**，且必须**保存在由缓存生成的响应中**，另外规定它必须**被转发**。

- 逐跳首部（**Hop-by-hop Header**）
  分在此类别中的首部只对**单次转发**有效，会因通过缓存或代理而不再转发。HTTP/1.1 和之后版本中，如果要使用 hop-by-hop 首部，需提供 Connection 首部字段。



下面列举了 HTTP/1.1 中的逐跳首部字段。除这 8 个首部字段之外，其他所有字段都属于端到端首部。



- Connection
- Keep-Alive
- Proxy-Authenticate
- Proxy-Authorization
- Trailer
- TE
- Transfer-Encoding
- Upgrade

## 6.3 HTTP/1.1 通用首部字段

通用首部字段是指，请求报文和响应报文双方都会使用的首部。

### 6.3.1 Cache-Control

通过指定首部字段 Cache-Control 的指令，就能操作缓存的工作机制。



- 图：首部字段 Cache-Control 能够控制缓存的行为
  <img src="https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20220104103017524.png" alt="image-20220104103017524" style="zoom:80%;" />

指令的参数是可选的，多个指令之间通过`,`分隔。首部字段 Cache-Control 的指令可用于请求及响应时。



`Cache-Control: private, max-age=0, no-cache`



- Cache-Control 指令一览

#### 表 6-5：缓存请求指令

| 指令            | 参数   | 说明                         |
| --------------- | ------ | ---------------------------- |
| no-cache        | 无     | 强制向源服务器再次验证       |
| no-store        | 无     | 不缓存请求或响应的任何内容   |
| max-age=[秒]    | 必需   | 响应的最大Age值              |
| max-stale=[秒]  | 可省略 | 接收已过期的响应             |
| min-fresh=[秒]  | 必需   | 期望在指定时间内的响应仍有效 |
| no-transform    | 无     | 代理不可更改媒体类型         |
| only-if-cached  | 无     | 从缓存获取资源               |
| cache-extension | -      | 新指令标记                   |



#### 表 6-6：缓存响应指令

| 指令             | 参数   | 说明                                           |
| ---------------- | ------ | ---------------------------------------------- |
| public           | 无     | 可向任意方提供响应的缓存                       |
| private          | 可省略 | 仅向特定用户返回响应                           |
| no-cache         | 可省略 | 缓存前必须确认其有效性                         |
| no-store         | 无     | 不缓存请求或响应的任何内容                     |
| no-transform     | 无     | 代理不可更改媒体类型                           |
| must-revalidate  | 无     | 可缓存但必须向源服务器进行确认                 |
| proxy-revalidate | 无     | 要求中间缓存服务器对缓存的响应有效性再进行确认 |
| max-age=[秒]     | 必需   | 响应的最大Age值                                |
| s-macage=[秒]    | 必需   | 公共缓存服务器响应的最大Age值                  |
| cache-extension  | -      | 新指令标记                                     |

#### 表示是否能缓存的指令

- public 指令

```
Cache-Control: public
```

当指定使用 **public** 指令时，则明确表明**其他用户也可利用缓存**。



- private 指令
  <img src="https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20220104150944577.png" alt="image-20220104150944577" style="zoom:80%;" />

```
Cache-Control: private
```

此指令表示响应只以特定的用户作为对象，与public的行为正好相反。



- no-cache 指令

```
Cache-Control: no-cache
```

此指令的目的是为了防止从缓存中返回**过期**的资源。

- no-store指令

```
Cache-Control: no-store
```

此指令规定不能在本地存储请求或者响应的任何一部分。

> 从字面意思上很容易把no-cache误解成为不缓存，实际它代表的是不缓存过期的资源，缓存会向源服务器进行有效期确认后处理资源，也许称为do-not-serve-from-cache-without-revalidation更合适。no-store才是真正地不进行缓存，请注意它们的区别。

- max-age指令

```
Cache-Control: maxage=604800（单位：秒）
```

当客户端发送的请求中包含max-age指令时，如果判定缓存资源的缓存时间数值比指定时间的数值更小，那么客户端就接收缓存的资源。当max-age值为0，缓存服务器需要将请求转发给源服务器。

当服务器返回的响应中包含max-age指令时，缓存服务器将不对资源的有效性再作确认，它的数值代表了缓存的最长时间。如果同时存在Expires字段，会优选处理max-age指令，而忽略掉Expires字段。

- s-maxage指令

```
Cache-Control: s-maxage=604800（单位：秒）
```

它的作用和max-age指令相同，不同点有两个：

1. 此指令只适用于供多位用户使用的公共缓存服务器，对于向同一用户重复返回响应的服务器来说，这个指令是没有用的。
2. 当使用此指令后，会直接忽略对Expires、max-age指令的处理。

- min-fresh指令

```
Cache-Control: min-fresh=60（单位：秒）
```

此指令要求缓存服务器返回还未过指定时间的缓存资源。

- max-stale指令

```
Cache-Control: max-stale=3600（单位：秒）
```

此指令表示即使缓存资源过期也照常接收。如果未指定参数值，那么无论经过多久，客户端都会接收响应。如果指定了具体值，那么即使过期，只要没有超过max-stale指定的时间内，客户端依然会接收。

- only-if-cached指令

```
Cache-Control: only-if-cached
```

此指令表示客户端仅在缓存服务器本直缓存了目标资源的情况下，才会要求其返回。该指令不要求缓存服务器重新加载响应，也不会再次确认资源有效性。若缓存服务器无响应，则返回504 Gateway Timeout。

- must-revalidate指令

```
Cache-Control: must-revalidate
```

此指令表示代理服务器会向源服务器再次验证即将返回的响应缓存目前是否仍然有效。若代理服务器无法从源服务器获取有效资源的话，应该给客户端返回504 Gateway Timeout。使用此指令之后，max-stale指令会被忽略。

- proxy-revalidate指令

```
Cache-Control: proxy-revalidate
```

此指令表示所有的缓存服务器在返回响应之前必须再次验证缓存的有效性。

- no-transform指令

```
Cache-Control: no-transform
```

此指令表示无论是在请求或者响应中，缓存都不能改变实体主体的缓存类型。

- Cache-Control扩展

cache-extension token

```
Cache-Control: private, community="UCI"
```

通过此标记，可以扩展Cache-Control的字段指令。如上例，就扩展了community这个指令。如果目标服务器不理解这个指令，就会直接忽略。

### 6.3.2 Connection



![image-20220104103037246](https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20220104103037246.png)





![image-20220104103045112](https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20220104103045112.png)





![image-20220104103052703](https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20220104103052703.png)





### 6.3.3 Date



<img src="https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20220104104559259.png" alt="image-20220104104559259" style="zoom:70%;" />





### 6.3.4 Pragma





### 6.3.5 Trailer



![image-20220104103102533](https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20220104103102533.png)





![image-20220104103110333](https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20220104103110333.png)



### 6.3.6 Transfer-Encoding



![image-20220104103203928](https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20220104103203928.png)



### 6.3.7 Upgrade



![image-20220104103212159](https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20220104103212159.png)





### 6.3.8 Via



![image-20220104103219449](https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20220104103219449.png)





### 6.3.9 Warning

## 6.4 请求首部字段



<img src="https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20220104105115364.png" alt="image-20220104105115364" style="zoom:80%;" />







### 6.4.1 Accept



<img src="https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20220104105402428.png" alt="image-20220104105402428" style="zoom:80%;" />



### 6.4.2 Accept-Charset



<img src="https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20220104103232864.png" alt="image-20220104103232864" style="zoom:80%;" />





### 6.4.3 Accept-Encoding



<img src="https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20220104103239574.png" alt="image-20220104103239574" style="zoom:80%;" />



### 6.4.4 Accept-Language



<img src="https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20220104103246988.png" alt="image-20220104103246988" style="zoom:80%;" />



### 6.4.5 Authorization



![image-20220104103254887](https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20220104103254887.png)





### 6.4.6 Expect



<img src="https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20220104103302733.png" alt="image-20220104103302733" style="zoom:80%;" />



### 6.4.7 From



<img src="https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20220104103311106.png" alt="image-20220104103311106" style="zoom:80%;" />



### 6.4.8 Host



![image-20220104103319169](https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20220104103319169.png)



### 6.4.9 If-Match



![image-20220104103330473](https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20220104103330473.png)





![image-20220104103337529](https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20220104103337529.png)



### 6.4.10 If-Modified-Since



![image-20220104103349409](https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20220104103349409.png)



### 6.4.11 If-None-Match



![image-20220104103357232](https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20220104103357232.png)



### 6.4.12 If-Range



![image-20220104103406980](https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20220104103406980.png)





![image-20220104103416341](https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20220104103416341.png)



### 6.4.13 If-Unmodified-Since





### 6.4.14 Max-Forwards



![image-20220104103426302](https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20220104103426302.png)





![image-20220104103432955](https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20220104103432955.png)





![image-20220104103439173](https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20220104103439173.png)



### 6.4.15 Proxy-Authorization





### 6.4.16 Range





### 6.4.17 Referer



![image-20220104103447954](https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20220104103447954.png)



### 6.4.18 TE





### 6.4.19 User-Agent



![image-20220104103456957](https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20220104103456957.png)





## 6.5 响应首部字段





![image-20220104103505454](https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20220104103505454.png)





### 6.5.1 Accept-Ranges



![image-20220104103511722](https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20220104103511722.png)



### 6.5.2 Age



![image-20220104103520179](https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20220104103520179.png)





### 6.5.3 ETag



![image-20220104103550371](https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20220104103550371.png)





![image-20220104103558928](https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20220104103558928.png)





### 6.5.4 Location



![image-20220104103608334](https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20220104103608334.png)





### 6.5.5 Proxy-Authenticate





### 6.5.6 Retry-After



![image-20220104103616159](https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20220104103616159.png)



### 6.5.7 Server



![image-20220104103624669](https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20220104103624669.png)



### 6.5.8 Vary



![image-20220104103631572](https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20220104103631572.png)





### 6.5.9 WWW-Authenticate



## 6.6 实体首部字段



![image-20220104103642379](https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20220104103642379.png)



### 6.6.1 Allow



![image-20220104103655923](https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20220104103655923.png)



### 6.6.2 Content-Encoding



<img src="https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20220104103710359.png" alt="image-20220104103710359" style="zoom:50%;" />





### 6.6.3 Content-Language



<img src="https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20220104103717548.png" alt="image-20220104103717548" style="zoom:50%;" />



### 6.6.4 Content-Length



<img src="https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20220104103726445.png" alt="image-20220104103726445" style="zoom:50%;" />



### 6.6.5 Content-Location





### 6.6.6 Content-MD5



![image-20220104103739931](https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20220104103739931.png)



### 6.6.7 Content-Range



![image-20220104103749291](https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20220104103749291.png)



### 6.6.8 Content-Type





### 6.6.9 Expires



![image-20220104103800835](https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20220104103800835.png)



### 6.6.10 Last-Modified



![image-20220104103809382](https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20220104103809382.png)





## 6.7 为 Cookie 服务的首部字段



![image-20220104103826412](https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20220104103826412.png)





### 6.7.1 Set-Cookie





### 6.7.2 Cookie



## 6.8 其他首部字段



### 6.8.1 X-Frame-Options









### 6.8.2 X-XSS-Protection





### 6.8.3 DNT



![image-20220104103844355](https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20220104103844355.png)





### 6.8.4 P3P



