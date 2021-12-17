function render (element) {
  element.className = "container";
  element.innerHtml = "Hello world.";
}

/*
element 是一个 HTMLElement 类型的对象。
innerHtml 写错了，应该是 innerHTML。
这一点，在强类型的语言中，就不容易出现错误。
因为强类型会对变量的类型做约束，它知道该变量是什么类型，能够给我们提供智能提示。
若我们引用了对象身上不存在的成员，在代码运行前，就会报错提示。
*/