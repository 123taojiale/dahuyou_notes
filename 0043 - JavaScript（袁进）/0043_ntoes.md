# 0043 - JavaScript（袁进）

# 1. 概述

# 2. JS语法基础

# 3. 运算符

# 4. 流程控制

# 5. 函数

# 6. 标准库



## 6-9. 正则表达式

01:00:58 + 01:00:58 + 01:00:58


### 05:53:14

![img](https://raw.githubusercontent.com/123taojiale/dahuyou_picture/main/blogs/202206301410141.png)

正则表达式 - 用于验证字符串的一个玩意儿。咋们现在是在 js 中介绍它，但是它其实是所有语言都相通的，规则一通百通。

### 06:26:08

![img](https://raw.githubusercontent.com/123taojiale/dahuyou_picture/main/blogs/202206301410215.png)

可以进入菜鸟教程中，找到「正则表达式 - 在线工具」测试正则表达式。

### 06:50:15

![img](https://raw.githubusercontent.com/123taojiale/dahuyou_picture/main/blogs/202206301410298.png)

在线地址：https://c.runoob.com/front-end/854/ PS：新版的页面和旧版的有所不同。

### 07:23:06

![img](https://raw.githubusercontent.com/123taojiale/dahuyou_picture/main/blogs/202206301410839.png)

字面量匹配，规则很简单，我们写啥就匹配啥，必须一模一样才行。

### 08:19:22

![img](https://raw.githubusercontent.com/123taojiale/dahuyou_picture/main/blogs/202206301410423.png)

我们输入的是字面量 abc，在匹配内容中，一共找到了两处满足条件的内容，所以结果中呈现两次匹配。

### 11:04:06

![img](https://raw.githubusercontent.com/123taojiale/dahuyou_picture/main/blogs/202206301410523.png)

特殊字符 . 匹配除换行符 \n 之外的任何单字符。要匹配 . ，请使用 \. 。a... 匹配的内容是以 a 开头，后边随便跟3个字符即可。

### 11:33:00

![img](https://raw.githubusercontent.com/123taojiale/dahuyou_picture/main/blogs/202206301410269.png)

此时匹配内容中，共有两处满足规则，所以匹配到了两处。

### 11:52:16

![img](https://raw.githubusercontent.com/123taojiale/dahuyou_picture/main/blogs/202206301410624.png)

...a... 匹配的规则：a 前边和后边都要求有 3 个字符

### 13:08:06

![img](https://raw.githubusercontent.com/123taojiale/dahuyou_picture/main/blogs/202206301410891.png)

特殊字符 ^ 表示开始，此时匹配的规则是：从匹配内容的开始位置起，要求出现 abc，并且该 abc 后边还得出现 3 个任意字符。所以此时只能匹配到第一个 abcd23 无法匹配到第二个 abc234

### 14:20:05

![img](https://raw.githubusercontent.com/123taojiale/dahuyou_picture/main/blogs/202206301410373.png)

特殊字符 $ 表示字符串的结尾，此时的匹配规则是：匹配内容的开头必须是 abc，并且后边还得出现任意 3 个字符，并且之后再无其它字符。

### 14:34:18

![img](https://raw.githubusercontent.com/123taojiale/dahuyou_picture/main/blogs/202206301410510.png)

此时可以正常匹配。

### 15:50:17

![img](https://raw.githubusercontent.com/123taojiale/dahuyou_picture/main/blogs/202206301410623.png)

\ 表示转义符，它的作用也比较简单，对于正则表达式中，含有特殊含义的字符，如果在前边加上了转义符，那么它将被识别为一个普通的符号。对于某些普通符号，比如字母 n、t，在前边加上转义符 \ 之后，它们将含有特殊含义。简言之：转义符就是将那些原本具有特殊含义的字符转为没有特殊含义，将某些普通字符，转为有特殊含义。

### 17:08:24

![img](https://raw.githubusercontent.com/123taojiale/dahuyou_picture/main/blogs/202206301410763.png)

\n 表示匹配换行，如果我们匹配内容如上图所示，那么是可以匹配到 abc 的，因为它后边出现了换行

### 17:14:20

![img](https://raw.githubusercontent.com/123taojiale/dahuyou_picture/main/blogs/202206301349478.png)

如果有多个满足条件的内容，那么它会全部都匹配上。

### 19:27:03

![img](https://raw.githubusercontent.com/123taojiale/dahuyou_picture/main/blogs/202206301410738.png)

为了测试 /t 制表符，我们可以通过这种方式来获取一个制表符，让后复制打印结果到匹配内容的输入框中。因为我们如果直接在文本框中按下 tab 键，那么会自动聚焦到下一个表单元素。

### 19:36:13

![img](https://raw.githubusercontent.com/123taojiale/dahuyou_picture/main/blogs/202206301410282.png)

\t 表示的是制表符，也就是我们按下 tab 键所打印的字符。

### 20:17:15

![img](https://raw.githubusercontent.com/123taojiale/dahuyou_picture/main/blogs/202206301410347.png)

abc 123 此时没法匹配，因为我们正则表达式中用的是一个普通空格，而匹配内容中间的空白，是一个制表符，所以不能匹配。

### 21:04:06

![img](https://raw.githubusercontent.com/123taojiale/dahuyou_picture/main/blogs/202206301410529.png)

\s 匹配的是空白字符，它可以匹配制表符，也可以匹配普通的空格字符。

### 21:17:17

![img](https://raw.githubusercontent.com/123taojiale/dahuyou_picture/main/blogs/202206301410536.png)

\n 换行符，它也是一个空白字符，\s 也是能够匹配的。

### 21:26:03

![img](https://raw.githubusercontent.com/123taojiale/dahuyou_picture/main/blogs/202206301410086.png)

正则中的一个规律，就拿 \s 和 \S 来说，\s 匹配的是空白字符，那么 \S 匹配的就是非空白字符，它们是恰好对立的。

### 22:09:03

![img](https://raw.githubusercontent.com/123taojiale/dahuyou_picture/main/blogs/202206301349978.png)

此时的匹配规则：abc 和 123 之间，必须要夹一个字符，该字符可以是任意字符，只要不是空白就行。

### 23:03:10

![img](https://raw.githubusercontent.com/123taojiale/dahuyou_picture/main/blogs/202206301410688.png)

这种写法，要求只要匹配内容中出现 hello 就能匹配

### 23:36:00

![img](https://raw.githubusercontent.com/123taojiale/dahuyou_picture/main/blogs/202206301410789.png)

\b 表示单词边界的意思，如果 hello 在字符串中出现，那么它前后不能有其它字符

### 23:54:18

![img](https://raw.githubusercontent.com/123taojiale/dahuyou_picture/main/blogs/202206301411067.png)

字符串的开始位置、结束位置、换行位置，都能匹配 \b，它们都是单词的边界。

### 24:29:06

![img](https://raw.githubusercontent.com/123taojiale/dahuyou_picture/main/blogs/202206301411094.png)

如果这么写，仅要求单词的开头是 hello，后边内容可以随意

### 24:42:21

![img](https://raw.githubusercontent.com/123taojiale/dahuyou_picture/main/blogs/202206301411549.png)

此时这么写，就没法匹配了，此时要求 hello 的结尾是一个单词边界，而匹配内容的 hello 后边是有字符 a 的，所以没法匹配

### 25:08:09

![img](https://raw.githubusercontent.com/123taojiale/dahuyou_picture/main/blogs/202206301411649.png)

\B 和 \b 刚好相反，它匹配非单词边界。

### 25:22:18

![img](https://raw.githubusercontent.com/123taojiale/dahuyou_picture/main/blogs/202206301411902.png)

\d 表示匹配一个数字字符

### 25:41:16

![img](https://raw.githubusercontent.com/123taojiale/dahuyou_picture/main/blogs/202206301411640.png)

此时可以找到 3 处匹配，因为有 3 个数字

### 27:23:00

![img](https://raw.githubusercontent.com/123taojiale/dahuyou_picture/main/blogs/202206301411883.png)

匹配一串数字，这一串数字要求以 1 开头，后边跟任意 10 个数字。

### 27:33:07

![img](https://raw.githubusercontent.com/123taojiale/dahuyou_picture/main/blogs/202206301411914.png)

\D 匹配非数字

### 28:12:14

![img](https://raw.githubusercontent.com/123taojiale/dahuyou_picture/main/blogs/202206301411974.png)

匹配任意长度为6的字符串，要求每个字符都不能是数字

### 28:33:22

![img](https://raw.githubusercontent.com/123taojiale/dahuyou_picture/main/blogs/202206301411015.png)

\w 可以匹配字母、数字、下划线

### 33:02:13

![img](https://raw.githubusercontent.com/123taojiale/dahuyou_picture/main/blogs/202206301411648.png)

\u 表示使用 unicode 编码来匹配字符，003f 是 ? 的 Unicode 编码，所以可以匹配到问号 ?

### 33:10:23

![img](https://raw.githubusercontent.com/123taojiale/dahuyou_picture/main/blogs/202206301349039.png)

中文的匹配，可以使用字面量的方式来匹配，但是也可以使用 Unicode 的方式来匹配。

### 34:06:10

![img](https://raw.githubusercontent.com/123taojiale/dahuyou_picture/main/blogs/202206301349068.png)

这一串 Unicode 编码，表示的含义就是“成哥非常帅”

### 36:32:22

![img](https://raw.githubusercontent.com/123taojiale/dahuyou_picture/main/blogs/202206301411507.png)

[] 一对中括号，表示一个集合的意思，只要是在这个集合中的内容，都可以匹配。

### 37:16:24

![img](https://raw.githubusercontent.com/123taojiale/dahuyou_picture/main/blogs/202206301350181.png)

[abc] 表示能匹配 a 或 b 或 c

### 37:58:00

![img](https://raw.githubusercontent.com/123taojiale/dahuyou_picture/main/blogs/202206301411360.png)

这种写法，意味着可以匹配 a 到 z 共 26 个小写字母

### 38:25:21

![img](https://raw.githubusercontent.com/123taojiale/dahuyou_picture/main/blogs/202206301411571.png)

这么写，表示可以匹配所有字母，包括大写和小写

### 38:55:15

![img](https://raw.githubusercontent.com/123taojiale/dahuyou_picture/main/blogs/202206301411602.png)

我们前面学习过的 \d，使用集合的方式来表示，其实就是 [0-9]

### 39:15:11

![img](https://raw.githubusercontent.com/123taojiale/dahuyou_picture/main/blogs/202206301411061.png)

这种写法就等效于 \w

### 41:54:17

![img](https://raw.githubusercontent.com/123taojiale/dahuyou_picture/main/blogs/202206301350278.png)

如果我们想要匹配所有基本汉字，使用集合的写法就可以非常轻易地实现

### 42:54:18

![img](https://raw.githubusercontent.com/123taojiale/dahuyou_picture/main/blogs/202206301411837.png)

这么写表示匹配所有的中文字符。\u 后边的 9fa5 和 9FA5 写法都是等效的，它表示的是十六进制的意思，计算出来都是同一个值。如果不知道汉字编码的范围，直接上网查就好。

### 43:18:11

![img](https://raw.githubusercontent.com/123taojiale/dahuyou_picture/main/blogs/202206301350999.png)

比如我们现在想要匹配名字，要求这些名字必须是两个中文，那么可以这么写。

### 43:38:05

![img](https://raw.githubusercontent.com/123taojiale/dahuyou_picture/main/blogs/202206301411889.png)

量词，这个知识点非常重要，它表示规则出现的次数。

### 44:35:22

![img](https://raw.githubusercontent.com/123taojiale/dahuyou_picture/main/blogs/202206301411001.png)

\* 表示匹配次数为 0 次或者多次。此时这种写法，能够匹配的空字符串、仅含中文的字符串（无论多少个中文）

### 45:24:07

![img](https://raw.githubusercontent.com/123taojiale/dahuyou_picture/main/blogs/202206301350243.png)

注意，这种写法也能匹配有 10 处匹配，这是因为 * 表示 0 次或者多次，开始匹配的时候，发现一开始就是字母 a，它并不是数字，所以匹配到了 0 个数字。后续依次类推，每个间隔出都完成了匹配，总计出现了 10 次匹配。

### 45:33:00

![image-20220630140639260](https://raw.githubusercontent.com/123taojiale/dahuyou_picture/main/blogs/202206301411254.png)

如果在匹配过程中出现了连续的数字，那么它会“贪婪”匹配，一次性将连续的都给匹配完，这些连续的数字算作是一次匹配。

### 46:00:01

![img](https://raw.githubusercontent.com/123taojiale/dahuyou_picture/main/blogs/202206301411402.png)

\+ 号，表示出现次数为 1 次或多次，至少得出现一次才行。

### 46:30:00

![img](https://raw.githubusercontent.com/123taojiale/dahuyou_picture/main/blogs/202206301350467.png)

? 号，表示出现次数为 0次 或 1次

### 47:15:22

![img](https://raw.githubusercontent.com/123taojiale/dahuyou_picture/main/blogs/202206301411054.png)

我们也可以通过这种方式来指定匹配的次数

### 48:23:12

![img](https://raw.githubusercontent.com/123taojiale/dahuyou_picture/main/blogs/202206301412222.png)

需求：匹配用户输入的密码，密码中只能出现字母或者数字，并且长度至少 6 位，至多 16 位。

### 49:04:16

![img](https://raw.githubusercontent.com/123taojiale/dahuyou_picture/main/blogs/202206301412249.png)

这么写，表示长度至少为 6 位，没有上限。

### 49:46:00

![image-20220630140713662](https://raw.githubusercontent.com/123taojiale/dahuyou_picture/main/blogs/202206301412882.png)

需求：匹配用户的姓名，姓名只能是 2 到 6 位的汉字

### 50:27:21

![img](https://raw.githubusercontent.com/123taojiale/dahuyou_picture/main/blogs/202206301412898.png)

一个竖线 | 表示或者的意思，表示多个规则任选其一

### 51:44:16

![img](https://raw.githubusercontent.com/123taojiale/dahuyou_picture/main/blogs/202206301412342.png)

括号 () 表示分组。\d[a-z]{3} 这种写法不要和 (\d[a-z]){3} 这种写法搞混了。前者表示的是开始是一个数字，后边得跟 3 个小写字母；后者表示一个数字一个字母组合起来，一共出现 3 次。

### 54:30:08

![img](https://raw.githubusercontent.com/123taojiale/dahuyou_picture/main/blogs/202206301412384.png)

如果 ^ 符号没有出现的正则表达式的开头，那么它表示取反的意思。这种写法表示匹配非数字字符，出现次数为 1次 或 多次。

### 54:41:01

![img](https://raw.githubusercontent.com/123taojiale/dahuyou_picture/main/blogs/202206301412748.png)

[^0-9] 等效于我们所写的 \D，它们表示的都是非数字

### 55:03:23

![img](https://raw.githubusercontent.com/123taojiale/dahuyou_picture/main/blogs/202206301412789.png)


匹配所有的字符，可以这么写

## 6-10. 错误处理








# 7. DOM核心

# 8. DOM事件

# 9. BOM事件

# 10. JS进阶
