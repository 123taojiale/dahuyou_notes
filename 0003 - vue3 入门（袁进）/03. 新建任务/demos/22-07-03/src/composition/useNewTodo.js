// 新增任务
import {
  ref
} from "vue";
import generateId from "../utils/generateId";

export default (todosRef) => {
  const newTodoRef = ref("");

  const addNewTodo = () => {
    // console.log(123);
    // 去掉首尾空白，连续空白字符视作一个空格
    let inputValue = newTodoRef.value.trim().replace(/\s+/g, " ");
    console.log(inputValue);
    // 校验是否为空
    if (!inputValue) return;
    // 创建任务对象
    const todoObj = {
      id: generateId(), // 任务 id
      completed: false, // 任务是否完成
      title: inputValue, // 任务的内容
    }
    todosRef.value.push(todoObj);
    newTodoRef.value = "";
  }

  return {
    newTodoRef,
    addNewTodo,
  }
}

// export const newTodoRef = ref("");

// export function addNewTodo(todosRef) {
//   return () => {
//     // console.log(123);
//     // 去掉首尾空白，连续空白字符视作一个空格
//     let inputValue = newTodoRef.value.trim().replace(/\s+/g, " ");
//     console.log(inputValue);
//     // 校验是否为空
//     if (!inputValue) return;
//     // 创建任务对象
//     const todoObj = {
//       id: generateId(), // 任务 id
//       completed: false, // 任务是否完成
//       title: inputValue, // 任务的内容
//     }
//     todosRef.value.push(todoObj);
//     newTodoRef.value = "";
//   }
// }
// export const newTodoRef = ref("");

// export function addNewTodo(todosRef) {
//   return () => {
//     // console.log(123);
//     // 去掉首尾空白，连续空白字符视作一个空格
//     let inputValue = newTodoRef.value.trim().replace(/\s+/g, " ");
//     console.log(inputValue);
//     // 校验是否为空
//     if (!inputValue) return;
//     // 创建任务对象
//     const todoObj = {
//       id: generateId(), // 任务 id
//       completed: false, // 任务是否完成
//       title: inputValue, // 任务的内容
//     }
//     todosRef.value.push(todoObj);
//     newTodoRef.value = "";
//   }
// }