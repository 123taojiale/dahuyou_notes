/**
 * 获取斐波拉切数列的第 n 位
 * @param {Number} n
 */
function getFeibo(n) {
  if (n === 1 || n === 2) {
    return 1;
  }
  return getFeibo(n - 1) + getFeibo(n - 2);
}

console.log(getFeibo(4)); // 3
/*
这个案例用来理解递归 特别合适 该程序的执行流程 必须得明明白白
可以先自己在纸上画一个执行栈 然后一步一步的执行 一步一步的分析
也可以结合控制台来看看自己的分析是否正确 或者 回看视频 19min -> 30min

简单分析 call stack 的变化
1. push global context ==> 全局上下文入栈
2. push getFeibo 的 execution context (n === 4) ==> getFeibo 的上下文入栈 此时 n 等于 4
接下来计算 geiFeibo(4)
  3. push getFeibo 的 execution context (n === 3) ==> getFeibo 的上下文入栈 此时 n 等于 3
  接下来计算 getFeibo(3)
    4. push getFeibo 的 execution context (n === 2) ==> getFeibo 的上下文入栈 此时 n 等于 2
    接下来计算 getFeibo(2)
      5. pop getFeibo 的 execution context (n === 2) ==> getFeibo 的上下文出栈 此时 n 等于 2 ==> 返回 1
      得到 getFeibo(2) 的结果 ==> 1
    6. push getFeibo 的 execution context (n === 1) ==> getFeibo 的上下文入栈 此时 n 等于 1
    接下来计算 getFeibo(1)
      7. pop getFeibo 的 execution context (n === 1) ==> getFeibo 的上下文出栈 此时 n 等于 1 ==> 返回 1
      得到 getFeibo(1) 的结果 ==> 1
  得到 getFeibo(3) 的结果 2
  8. push getFeibo 的 execution context (n === 2) ==> getFeibo 的上下文入栈 此时 n 等于 2
  接下来计算 getFeibo(2)
    9. pop getFeibo 的 execution context (n === 2) ==> getFeibo 的上下文出栈 此时 n 等于 2 ==> 返回 1
    得到 getFeibo(2) 的结果 ==> 1

... 这个动态过程实在不好描述 还是动手画一画吧 结合视频进行验证 自己的分析过程是否正确 理解了即可

这个分析过程 和 二叉树的遍历很相似
*/