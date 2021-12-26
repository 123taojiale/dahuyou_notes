# 回溯算法

[TOC]

## 前言

### 参考文章

- [知乎 回溯算法套路详解](https://zhuanlan.zhihu.com/p/93530380)
- [wiki 回溯法](https://zh.wikipedia.org/wiki/回溯法)
- [百度百科 回溯算法](https://baike.baidu.com/item/回溯算法/9258495)
- [代码随想录](https://programmercarl.com/)

## 什么是回溯算法？

- 回溯算法（英语：backtracking）是「`暴力搜索法`」中的一种，所以也叫「`回溯搜索法`」。
- 回溯算法是一个「`类似枚举的搜索过程`」，主要是在搜索过程中寻找问题的解，当发现已不满足求解条件时，就“回溯”返回，尝试别的已选。
- 回溯算法采用「`试错思想`」，尝试分步地去解决一个问题，它是一种走不通，就回头的方法。
- 回溯算法就是在「`递归`」里面嵌套「`循环`」。
- 回溯是递归的副产品，只要有递归就会有回溯。

## 回溯算法的特点

- 难
- 效率不高
- 解决某些特定问题的标配

## 回溯算法的经典问题

- 组合问题：N 个数里面按一定规则找出 k 个数的集合
  - [x] [77. 组合](https://leetcode-cn.com/problems/combinations/)
  - [ ] [17. 电话号码的字母组合](https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/)
  - [ ] [39. 组合总和](https://leetcode-cn.com/problems/combination-sum/)
  - [ ] [40. 组合总和 II](https://leetcode-cn.com/problems/combination-sum-ii/)
  - [ ] [216. 组合总和 III](https://leetcode-cn.com/problems/combination-sum-iii/)
- 分割问题：一个字符串按一定规则有几种切割方式
  - [ ] 131. 分割回文串
  - [ ] [93. 复原 IP 地址](https://leetcode-cn.com/problems/restore-ip-addresses/)
- 子集问题：一个 N 个数的集合里有多少符合条件的子集
  - [ ] [78. 子集](https://leetcode-cn.com/problems/subsets/)
  - [ ] [90. 子集 II](https://leetcode-cn.com/problems/subsets-ii/)
- 排列问题：N 个数按一定规则全排列，有几种排列方式
  - [ ] [46. 全排列](https://leetcode-cn.com/problems/permutations/)
  - [ ] [47. 全排列 II](https://leetcode-cn.com/problems/permutations-ii/)
- 棋盘问题
  - [ ] [51. N 皇后](https://leetcode-cn.com/problems/n-queens/)
  - [ ] [37. 解数独](https://leetcode-cn.com/problems/sudoku-solver/)
- 其他。。
  - [ ] [491. 递增子序列](https://leetcode-cn.com/problems/increasing-subsequences/)
  - [ ] [332. 重新安排行程](https://leetcode-cn.com/problems/reconstruct-itinerary/)

## 回溯算法的套路

### 术语

- 已选：已经做出的选择。

- 可选：当前可以做的选择。「难点」

- 出口：到达决策树底层，无法再做选择的条件。

这些术语在下面的全排列问题中会用到，结合代码来理解这些术语。

### 模板

```js
const ans = [];
function backtrack(已选, 可选) {
  if (出口条件满足) {
    ans.push(已选);
    return;
  }
  for (选择 of 可选) {
    做选择
    backtrack(已选, 可选);
    撤销选择
  }
}
```

> 解决一个回溯问题，实际上就是树的遍历过程，「循环」+「递归」，在递归调用之前「做选择」，在递归调用之后「撤销选择」。

## 分析 - 全排列问题

### 排列组合

我们在高中的时候就做过排列组合的数学题，我们也知道 `n` 个不重复的数，全排列共有 n! 个。那么我们当时是怎么穷举全排列的呢？比方说给三个数 `[1,2,3]`，你肯定不会无规律地乱穷举，一般是这样：先固定第一位为 1，然后第二位可以是 2，那么第三位只能是 3；然后可以把第二位变成 3，第三位就只能是 2 了；然后就只能变化第一位，变成 2，然后再穷举后两位……其实这就是回溯算法，我们高中无师自通就会用，或者有的同学直接画出如下这棵「回溯树」。



<img src="https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20211210142105565.png" alt="image-20211210142105565" style="zoom:50%;" />



只要从根遍历这棵树，记录已选上的数字，其实就是所有的全排列。**我们不妨把这棵树称为回溯算法的「决策树」**。为啥说这是决策树呢，因为你在每个节点上其实都在做决策。比如说你站在红色节点上做决策，可以选择 1 那条树枝，也可以选择 3 那条树枝。为啥只能在 1 和 3 之中选择呢？因为 2 这个树枝在你身后，这个选择你之前做过了，而全排列是不允许重复使用数字的。

### 术语解释

- `[2]` 就是「已选」，记录你已经做过的选择；
- `[1,3]` 就是「可选」，表示你当前可以做出的选择；
- 「出口」就是遍历到树的底层，在这里就是可选为空的时候；



<img src="https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20211210143427291.png" alt="image-20211210143427291" style="zoom:50%;" />



「已选」和「可选」就好比上图中每个节点的属性，而我们定义的 `backtrack` 函数其实就像一个指针，在这棵树上游走，同时要正确维护每个节点的属性，每当走到树的底层，其「已选」就是一个全排列。

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



回想我们刚才说的，「已选」和「可选」是每个节点的属性， `backtrack` 函数在树上游走要正确维护节点的属性，那么就要在这两个特殊时间点搞点动作。我们只要在前序遍历时做选择，在后序遍历时撤销选择，就能正确得到每个节点的可选和已选。

### 核心逻辑

```js
for (选择 of 可选) {
  // 做选择
  将该选择从可选中移除
  已选.push(选择);
  backtrack(已选, 可选);
  // 撤销选择
  已选.pop(选择);
  将该选择再次加入可选
}
```

### 参考答案

```js
var permute = function (nums) {
  let ans = []; // 存放全排列
  let path = []; // 存放已选（已作出的选择）

  const backtracking = (nums, path) => {
    if (path.length == nums.length) { // 出口
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
已选：记录在 path 中
可选：nums 中那些不存在于 path 中的元素
出口：nums 中的元素全都 path 中出现
*/
```







