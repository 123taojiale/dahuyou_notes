# 回溯算法

[TOC]

## 前言

参考文章：

- [知乎 回溯算法套路详解](https://zhuanlan.zhihu.com/p/93530380)

- [wiki 回溯法](https://zh.wikipedia.org/wiki/回溯法)
- [百度百科 回溯算法](https://baike.baidu.com/item/回溯算法/9258495)
- [leetcode 全排列](https://leetcode-cn.com/problems/permutations/)
- [leetcode N 皇后](https://leetcode-cn.com/problems/n-queens/)

> 该笔记的主要内容是知乎上的文章。
>
> 回溯经典问题 —— leetcode，直接上 leetcode 上刷。

## 概念

### wiki

**回溯法**（英语：backtracking）是[暴力搜索法](https://zh.wikipedia.org/wiki/暴力搜尋法)中的一种。



对于某些计算问题而言，回溯法是一种可以找出所有（或一部分）解的一般性算法，尤其适用于[约束补偿问题](https://zh.wikipedia.org/wiki/约束补偿问题)（在解决约束满足问题时，我们逐步构造更多的候选解，并且在确定某一部分候选解不可能补全成正确解之后放弃继续搜索这个部分候选解本身及其可以拓展出的子候选解，转而测试其他的部分候选解）。

在经典的教科书中，**[八皇后问题](https://zh.wikipedia.org/wiki/八皇后问题)**展示了回溯法的用例。（八皇后问题是在标准国际象棋棋盘中寻找八个皇后的所有分布，使得没有一个皇后能攻击到另外一个。）



回溯法采用[试错](https://zh.wikipedia.org/wiki/试错)的思想，它尝试**分步的去解决一个问题**。在分步解决问题的过程中，当它通过尝试发现，现有的分步答案不能得到有效的正确的解答的时候，它将取消上一步甚至是上几步的计算，再通过其它的可能的分步解答再次尝试寻找问题的答案。回溯法通常用最简单的[递归](https://zh.wikipedia.org/wiki/递归)方法来实现，在反复重复上述的步骤后可能出现两种情况：

- 找到一个可能存在的正确的答案
- 在尝试了所有可能的分步方法后宣告该问题没有答案

在最坏的情况下，回溯法会导致一次[复杂度](https://zh.wikipedia.org/wiki/计算复杂性理论)为[指数时间](https://zh.wikipedia.org/wiki/指數時間)的计算。

### 百度百科

回溯算法实际上**是一个类似枚举的搜索尝试过程**，主要是在搜索尝试过程中寻找问题的解，当发现已不满足求解条件时，就“回溯”返回，尝试别的路径。回溯法是一种选优[搜索](https://baike.baidu.com/item/搜索/2791632)法，按选优条件向前搜索，以达到目标。但当探索到某一步时，发现原先选择并不优或达不到目标，就退回一步重新选择，这种**走不通就退回再走的技术为回溯法**，而满足回溯条件的某个状态的点称为“**回溯点**”。许多复杂的，规模较大的问题都可以使用回溯法，有“通用解题方法”的美称。

> 关键词：枚举、搜索、暴力搜索、约束、尝试、试错、回溯、递归、回溯点。

 

## 套路

### 术语

- 路径：已经做出的选择。

- 选择列表：当前可以做的选择。

- 结束条件：到达决策树底层，无法再做选择的条件。

> 可以结合下面的「全排列」问题来理解这些术语。

### 模板

```js
const ans = [];
function backtrack(路径, 选择列表) {
  if (满足结束条件) {
    ans.push(路径);
    return;
  }
  for (选择 of 选择列表) {
    做选择
    backtrack(路径, 选择列表);
    撤销选择
  }
}
```

### 核心

解决一个回溯问题，实际上就是一个[决策树](https://www.zhihu.com/search?q=决策树&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"article"%2C"sourceId"%3A93530380})的遍历过程，就是 for 循环里面的递归，**在递归调用之前「做选择」，在递归调用之后「撤销选择」**。

## 全排列问题

### 排列组合

我们在高中的时候就做过排列组合的数学题，我们也知道 `n` 个不重复的数，全排列共有 n! 个。那么我们当时是怎么穷举全排列的呢？比方说给三个数 `[1,2,3]`，你肯定不会无规律地乱穷举，一般是这样：先固定第一位为 1，然后第二位可以是 2，那么第三位只能是 3；然后可以把第二位变成 3，第三位就只能是 2 了；然后就只能变化第一位，变成 2，然后再穷举后两位……其实这就是回溯算法，我们高中无师自通就会用，或者有的同学直接画出如下这棵「回溯树」。



<img src="https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20211210142105565.png" alt="image-20211210142105565" style="zoom:50%;" />



只要从根遍历这棵树，记录路径上的数字，其实就是所有的全排列。**我们不妨把这棵树称为回溯算法的「决策树」**。为啥说这是决策树呢，因为你在每个节点上其实都在做决策。比如说你站在红色节点上做决策，可以选择 1 那条树枝，也可以选择 3 那条树枝。为啥只能在 1 和 3 之中选择呢？因为 2 这个树枝在你身后，这个选择你之前做过了，而全排列是不允许重复使用数字的。

### 术语解释

- `[2]` 就是「路径」，记录你已经做过的选择；
- `[1,3]` 就是「选择列表」，表示你当前可以做出的选择；
- 「结束条件」就是遍历到树的底层，在这里就是选择列表为空的时候；

 

<img src="https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20211210143427291.png" alt="image-20211210143427291" style="zoom:50%;" />



「路径」和「选择列表」就好比上图中每个节点的属性，而我们定义的 `backtrack` 函数其实就像一个指针，在这棵树上游走，同时要正确维护每个节点的属性，每当走到树的底层，其「路径」就是一个全排列。

 

### 树的遍历

![image-20211212185019948](https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20211212185019948.png)



使用递归 recursion，可以遍历一棵树。那么，前序遍历和后序遍历在代码中如何实现呢？

```js
function traverse(root) {
  for (child of root.children) {
    // 前序遍历需要的操作
    traverse(child);
    // 后序遍历需要的操作
  }
}
```

 

<img src="https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20211210143635606.png" alt="image-20211210143635606" style="zoom:50%;" />



所谓的前序遍历和后序遍历，它们只是两个很有用的时间点。**前序遍历的代码在进入某一个节点之前的那个时间点执行，后序遍历代码在离开某个节点之后的那个时间点执行。**



<img src="https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20211210143748108.png" alt="image-20211210143748108" style="zoom: 50%;" />

 

回想我们刚才说的，「路径」和「选择列表」是每个节点的属性， `backtrack` 函数在树上游走要正确维护节点的属性，那么就要在这两个特殊时间点搞点动作。我们只要在前序遍历时做选择，在后序遍历时撤销选择，就能正确得到每个节点的选择列表和路径。

### 回溯算法核心逻辑

```js
for (选择 of 选择列表) {
  // 做选择
  将该选择从选择列表中移除
  路径.push(选择);
  backtrack(路径, 选择列表);
  // 撤销选择
  路径.pop(选择);
  将该选择再次加入选择列表
}
```

> 想要理解回溯算法的核心逻辑，必须充分理解上面提到的树的前序遍历和后序遍历。

### 参考答案

```js
var permute = function (nums) {
  let ans = []; // 存放全排列
  let path = []; // 存放路径（已作出的选择）

  const backtracking = (nums, path) => {
    if (path.length == nums.length) { // 结束条件
      ans.push(path.slice());
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (path.indexOf(nums[i]) !== -1) continue; // 排除不合法的选择
      path.push(nums[i]); // 做选择
      backtracking(nums, path); // 进入下层决策树
      path.pop(); // 取消选择
    }
  };

  backtracking(nums, path);
  return ans;
};
/*
路径：记录在 path 中
选择列表：nums 中那些不存在于 path 中的元素
结束条件：nums 中的元素全都 path 中出现
*/
```



我们这里稍微做了些变通，没有显式记录「选择列表」，而是通过 `nums` 和 `track` 推导出当前的选择列表：



<img src="https://pic1.zhimg.com/80/v2-225cacafaca5b664b43d6e30be5a8440_1440w.jpg" alt="img" style="zoom:50%;" />



至此，我们就通过全排列问题详解了回溯算法的底层原理。当然，这个算法解决全排列不是很高效，应为对链表使用 `contains` 方法需要 O(N) 的时间复杂度。有更好的方法通过交换元素达到目的，但是难理解一些，这里就不写了，有兴趣可以自行搜索一下。



但是必须说明的是，不管怎么优化，都符合[回溯框架](https://www.zhihu.com/search?q=回溯框架&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"article"%2C"sourceId"%3A93530380})，而且时间复杂度都不可能低于 O(N!)，因为穷举整棵决策树是无法避免的。**这也是回溯算法的一个特点，不像[动态规划](https://www.zhihu.com/search?q=动态规划&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"article"%2C"sourceId"%3A93530380})存在重叠子问题可以优化，回溯算法就是纯暴力穷举，复杂度一般都很高**。

## N 皇后问题

 明白了全排列问题，就可以直接套回溯算法框架了，下面简单看看 N 皇后问题。



 

 

 

 