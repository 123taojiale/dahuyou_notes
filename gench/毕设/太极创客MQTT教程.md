# 太极创客 MQTT 教程

## 前言



本教程分为两部分：

- [MQTT基础篇](http://www.taichi-maker.com/%e7%bd%91%e7%ab%99%e6%96%87%e7%ab%a0%e9%a1%b5/mqtt-index/)
- [MQTT应用篇](http://www.taichi-maker.com/homepage/esp8266-nodemcu-iot/iot-tuttorial/mqtt-application/)

## 1-1 MQTT是什么

MQTT是一个`客户端服务端架构`的`发布/订阅模式`的`消息传输协议`。它的设计思想是轻巧、开放、简单、规范，易于实现。这些特点使得它对很多场景来说都是很好的选择，特别是对于受限的环境如机器与机器的通信（M2M）以及物联网环境（IoT）。

## 1-2 MQTT基本原理

下面要介绍的 MQTT 基本原理，实际上就是在对 1-1 中提到的 MQTT 的定义「MQTT是一个`客户端服务端架构`的`发布/订阅模式`的`消息传输协议`。」的解释说明。

- [x] 理解 MQTT 服务端的作用
  信息的中转站
- [x] 理解 MQTT 主题是什么
  可以理解为信息的标识，信息的分组，目的是为了便于 MQTT 服务器管理信息。
- [x] 理解 MQTT 客户端都可以做哪两件事
  发布信息、接收信息
- [ ] 简单了解 MQTT 协议，订阅和发布的特点
  彼此可独立，空间可分离、时间可异步

### MQTT 服务端

**MQTT 服务端通常是一台服务器。**它是 MQTT 信息传输的枢纽，负责将 MQTT 客户端发送来的信息传递给 MQTT 客户端。MQTT 服务端还负责管理 MQTT 客户端。确保客户端之间的通讯顺畅，保证 MQTT 消息得以正确接收和准确投递。

> 可以把 MQTT 服务端理解为一个中转站，任何信息都要经过这个中转站来传输。

### MQTT 客户端

**MQTT 客户端可以向服务端`发布`信息，也可以从服务端`收取`信息。**我们把客户端发送信息的行为成为“发布”信息。而客户端要想从服务端收取信息，则首先要向服务端“订阅”信息。“订阅”信息这一操作很像我们在视频网站订阅某一部电视剧。当这部电视剧上新后，视频网站会向订阅了该剧的用户发送信息，告诉他们有新剧上线了。

### MQTT 主题

刚刚我们在讲解 MQTT 客户端订阅信息时，使用了用户在视频网站订阅电视剧这个例子。在 MQTT 通讯中，客户端所订阅的肯定不是一部部电视剧，而是一个个“主题”。**MQTT 服务端在管理 MQTT 信息通讯时，就是使用“主题”来控制的**。

<img src="https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20211214230346185.png" alt="image-20211214230346185" style="zoom:67%;" />

在以上图示中一共有三个 MQTT 客户端。它们分别是汽车，手机和电脑。MQTT 服务端在管理 MQTT 通讯时使用了“主题”来对信息进行管理。比如上图所示，假设我们需要利用手机和电脑获取汽车的速度，那么我们首先要利用电脑和手机向 MQTT 服务器订阅主题“汽车速度”。接下来，当汽车客户端向服务端的“汽车速度”主题发布信息后，服务端就会首先检查以下都有哪些客户端订阅了“汽车速度”这一主题的信息。当它发现订阅了该主题的客户端有一个手机和一个电脑，于是服务端就会将刚刚收到的“汽车速度”信息转发给订阅了该主题的手机和电脑客户端。



在以上实例中，汽车是“汽车速度”主题的发布者，而手机和电脑则是该主题的订阅者。值得注意的是，**MQTT 客户端在通讯时，往往角色不是单一的**。它既可以作为信息发布者也可以同时作为信息订阅者。



<img src="https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20211214230456000.png" alt="image-20211214230456000" style="zoom:67%;" />



上图中的所有客户端都是围绕“空调温度”这一主题进行通讯的。对于“空调温度”这一主题，手机和电脑客户端成为了 MQTT 信息的发布者而汽车则成为了 MQTT 信息的订阅者（接收者）。可以看到，针对不同的主题，MQTT 客户端可以切换自己的角色。它们可能对主题 A 来说是信息发布者，但是对于主题 B 就成了信息订阅者。

### MQTT 发布/订阅 特性

从以上实例我们可以看到，MQTT 通讯的核心枢纽是 MQTT 服务端。有了服务端对 MQTT 信息的接收、储存、处理和发送，**客户端在发布和订阅信息时，可以相互独立，且在空间上可以分离，时间上可以异步**。这里所说的相互独立、空间和时间分离具体指的是什么呢？

- **相互可独立**：MQTT 客户端是一个个独立的个体。它们**无需了解彼此的存在，依然可以实现信息交流**。比如以上实例中汽车客户端在发布“汽车速度”信息时，汽车客户端本身可以完全不知道有多少个 MQTT 客户端订阅了“汽车速度”这一主题。而订阅了“汽车速度”主题的手机和电脑客户端也完全不知道彼此的存在。大家只要订阅了“汽车速度”主题，MQTT 服务端就会在每次收到新信息时，将信息发送给订阅了“汽车速度”主题的客户端。
- **空间可分离**：空间分离相对容易理解，**MQTT 客户端在通讯必要条件是连接到了同一个 MQTT 通讯网络**。这个网络可以是互联网或者局域网。只要客户端联网，无论他们远在天边还是近在眼前，都可以实现彼此间的通讯交流。
- **时间可异步**：MQTT 客户端在发送和接收信息时无需同步。这一特点对物联网设备尤为重要。有时物联网设备会发生意外离线的情况。我们使用以上实例二的场景来作为示例。当我们的汽车在行驶过程中，可能会突然进入隧道，这时汽车可能会断开与 MQTT 服务端的连接。假设在此时我们的手机客户端向汽车客户端所订阅的“空调温度”主题发布了信息，而汽车恰恰不在线。这时，MQTT 服务端可以将“空调温度”主题的新信息保存，待汽车再次上线后，服务端再将“空调温度”信息推送给汽车。

> 以上几点概括了 MQTT 通讯时客户端的相互关系以及服务端在其中所起的作用。
>
> 可能有些朋友看过以上文字后感觉有些抽象。毕竟这些都是纯理论知识，在后面的教程里，我们将通过实例向您讲解 MQTT 的应用，届时相信您会对 MQTT 有深切的认识。到这里，请您务必留意 MQTT 通讯的三个特点，`彼此可独立，空间可分离、时间可异步`。



**Attention**

以上总结的几个特点中都有一个“可”字。这个“可”字意味着客户端彼此之间可以独立，空间可以分离，时间可以异步。在我们实际应用中，客户端之间的关系既可以独立也可以相互依存。在空间上，既可以相距甚远，也可以彼此相邻。在时间上，既可以异步也可以同步。这个“可”字所体现的是 MQTT 通讯的灵活性。



## 1-3 连接 MQTT 服务端

MQTT 客户端之间要想实现通讯，必须要通过 MQTT 服务端。因此 MQTT 客户端无论是发布消息还是订阅消息，首先都要连接 MQTT 服务端。下面我们看一下 MQTT 客户端连接服务端的详细过程。

- [x] 什么是 connect
  客户端向服务端发起的连接请求
- [x] 什么是 connack
  服务端向客服端发起的连接确认



**MQTT客户端连接服务端一共有两步。**

1. 首先 MQTT 客户端将会向服务端发送`连接请求`。该请求实际上是一个包含有连接请求信息的数据包。这个数据包的官方名称为

    `CONNECT`。

   <img src="http://www.taichi-maker.com/wp-content/uploads/2020/09/MQTT-Client-Sends-Connection-Request.png" alt="客户端向服务端发送连接请求信息 - CONNECT" style="zoom:80%;" />

2. MQTT 服务端收到客户端连接请求后，会向客户端发送`连接确认`。同样的，该确认也是一个数据包。这个数据包官方名称为 

   `CONNACK`。

   <img src="http://www.taichi-maker.com/wp-content/uploads/2020/09/MQTT-Server-Sends-Connection-Confirmation.png" alt="服务端向客户端发送连接确认 - CONNACK" style="zoom:80%;" />

> 以上就是 MQTT 客户端在连接服务端的两步操作。接下来，我们一起来了解一下客户端在连接服务端时所发送的 CONNECT 报文内容。

### CONNECT – 连接服务端



![MQTT CONNECT 报文内容](http://www.taichi-maker.com/wp-content/uploads/2020/09/MQTT-connect.gif)



- clientId – 客户端ID - MQTT 客户端的标识 「MQTT 服务端用该标识来识别客户端」
- cleanSession – 清除会话 - 区分客户端对系统运行的重要性「重要信息 false 不重要信息 true」
- keepAlive – 心跳时间间隔 - 用于服务端了解客户端连接情况

### CONNACK – 确认连接请求



![MQTT CONNACK 信息内容](http://www.taichi-maker.com/wp-content/uploads/2020/09/connack.gif)



- returnCode – 连接返回码 - 0 表示链接成功「其他表示各种错误 -> [查表](taichi-maker.com/homepage/esp8266-nodemcu-iot/iot-tuttorial/mqtt-tutorial/4-mqtt-server-connection/)」
- sessionPresent – 当前会话 - 重要信息需保存，不重要信息不保存。「与 CONNECT 报文的 cleanSession 相互配合，确保客户端接收到消息。」



## 1-4 MQTT 服务端连接操作

到目前为止，我们已经学习了 MQTT 客户端连接服务端的基本原理。光有理论知识还不够，在本节课程里我们将一起学习如何使用电脑客户端和 ESP8266 客户端来连接 MQTT 服务端。

- [ ] 了解 MQTTfx 软件的基本使用
  👉 [视频教程](https://www.bilibili.com/video/BV1T54y1k7MQ?zw)
- [ ] 

### 电脑客户端连接 MQTT 服务端

首先我们一起来学习如何使用电脑软件来实现客户端与服务端的连接。我们将为电脑安装一款免费的 MQTT 客户端软件 – `MQTTfx`。MQTT 客户端软件有很多款，不过经过我们的使用和比较，发现免费的 MQTTfx 软件在易用性和功能性都非常出色。



`通过 MQTTfx 软件，我们的电脑将会成为一台 MQTT 客户端。`您有两个途径下载到 MQTTfx 软件。首先，您可以通过 [① MQTT 官网](http://mqttfx.org)下载到 MQTTfx 软件。「[② 若无法打开，请点击这里获取下载链接和教程。](http://www.taichi-maker.com/homepage/download/#mqtt)」

> 特别提示一点，建议您尽量使用以上的MQTTfx官网下载此软件，因为官网上的软件版本肯定是最新的。

接下来我们就来实际使用 MQTTfx 客户端来尝试连接服务端。具体操作方法 👉 [视频教程](https://www.bilibili.com/video/BV1T54y1k7MQ?zw)。

### ESP8266 连接 MQTT 服务端

ESP8266 的 Arduino 开发环境里有多个 MQTT 库，我们将使用最为流行的 PubSubClient 库来作为本教程的主要介绍对象，我们将通过一系列课程教您如何使用 ESP8266 通过 PubSubClient 库来实现 MQTT 物联网应用。关于 PubSubClient 库，以下是其基本信息：

- 作者名：[Nick O’Leary](https://twitter.com/knolleary)
- 官网地址：https://pubsubclient.knolleary.net/
- GitHub：https://github.com/knolleary/pubsubclient/
- 百度网盘下载： https://pan.baidu.com/s/12MHGbdfiOdwOGip5RMSSEQ 提取码: sizy

```c++
#include <ESP8266WiFi.h>
#include <PubSubClient.h>
 
// 设置 wifi 接入信息
const char* ssid = "taichi-maker";
const char* password = "12345678";
const char* mqttServer = "test.ranye-iot.net";
 
WiFiClient wifiClient;
PubSubClient mqttClient(wifiClient);
 
void setup() {
  Serial.begin(9600);
 
  // 设置 ESP8266 工作模式为无线终端模式
  WiFi.mode(WIFI_STA);
  
  // 连接 WiFi
  connectWifi();
  
  // 设置 MQTT 服务器和端口号
  mqttClient.setServer(mqttServer, 1883);
 
  // 连接MQTT服务器
  connectMQTTServer();
}
 
void loop() { 
  if (mqttClient.connected()) { // 如果开发板成功连接服务器
    mqttClient.loop(); 					// 保持客户端心跳
  } else { 											// 如果开发板未能成功连接服务器
    connectMQTTServer();   	 		// 则尝试连接服务器
  }
}
 
void connectMQTTServer(){
  // 根据 ESP8266 的 MAC 地址生成客户端 ID（避免与其它 ESP8266 的客户端 ID 重名）
  String clientId = "esp8266-" + WiFi.macAddress();
 
  // 连接MQTT服务器
  if (mqttClient.connect(clientId.c_str())) { 
    Serial.println("MQTT Server Connected.");
    Serial.println("Server Address: ");
    Serial.println(mqttServer);
    Serial.println("ClientId:");
    Serial.println(clientId);
  } else {
    Serial.print("MQTT Server Connect Failed. Client State:");
    Serial.println(mqttClient.state());
    delay(3000);
  }   
}
 
// ESP8266连接wifi
void connectWifi(){
 
  WiFi.begin(ssid, password);
 
  //等待WiFi连接,成功连接后输出成功信息
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.print(".");
  }
  Serial.println("");
  Serial.println("WiFi Connected!");  
  Serial.println(""); 
}
```

**注解**

- 进入官网，查看引用的库的所有 API。
  - [ESP8266WiFi.h](https://arduino-esp8266.readthedocs.io/en/latest/esp8266wifi/readme.html)
  - [PubSubClient.h](https://pubsubclient.knolleary.net/)
- `c_str()` 返回当前字符串的首字符地址。
- `mqttClient.connected()` 如果开发板成功连上 mqtt 服务器，那么返回真；没有连上则返回假。[connected](https://pubsubclient.knolleary.net/api#connected)
- 



## 1-5 发布、订阅和取消订阅



## 1-6 ESP8266 发布 MQTT 消息



## 1-7 MQTT 主题进阶



## 1-8 ESP8266 订阅 MQTT 主题



## 1-9 自我测试





## 2-1 QoS 服务质量等级



## 2-2 ESP8266 QoS应用



## 2-3 保留消息



## 2-4 ESP8266 保留消息应用



## 2-5 心跳机制



## 2-6 MQTT 遗嘱



## 2-7 ESP8266 MQTT 遗嘱应用



## 2-8 MQTT 用户密码认证



## 2-9 自我测试



## 1-1. 注册物联网平台





## 1-2. 物联网平台基本操作





## 1-3. 物联网平台控制esp8266-上





## 1-4. 物联网平台控制esp8266-下





## 1-5. 用电脑搭建物联网控制台-上





## 1-6. 用电脑搭建物联网控制台-下