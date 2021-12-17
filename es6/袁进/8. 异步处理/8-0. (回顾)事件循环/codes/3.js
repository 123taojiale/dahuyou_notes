function a() {
  console.log('a');
  b();
}

function b() {
  console.log('b');
  c();
}

function c() {
  console.log('c');
}

console.log('global');
a();
/*
global
a
b
c
*/

/*
简单分析 call stack 的变化
1. push global context ==> 全局上下文入栈
   push log 的 execution context ==> log的上下文入栈
   pop log 的 execution context ==> log的上下文出栈
2. push a 的 execution context ==> a的上下文入栈
3. push log 的 execution context ==> log的上下文入栈
4. pop log 的 execution context ==> log的上下文出栈
5. push b 的 execution context ==> b的上下文入栈
6. push log 的 execution context ==> log的上下文入栈
7. pop log 的 execution context ==> log的上下文出栈
8. push c 的 execution context ==> c的上下文入栈
9. push log 的 execution context ==> log的上下文入栈
10. pop log 的 execution context ==> log的上下文出栈
11. pop c 的 execution context ==> c的上下文出栈
12. pop b 的 execution context ==> b的上下文出栈
13. pop a 的 execution context ==> a的上下文出栈
14. pop global context ==> 全局的上下文出栈

小结: 3个函数的入栈和出栈的先后顺序
    函数a先执行 a还没执行完 函数b入栈 b还没执行完 函数c入栈
    函数c最先执行完 函数c出栈 ==> 函数b执行完 函数b出栈 ==> 函数a执行完 函数a出栈
    入栈顺序: 函数a -> 函数b -> 函数c
    出栈顺序: 函数c -> 函数b -> 函数a

视频: 13min -> 20min
*/