const LOCAL_KEY = "todomvc";

/**
 * 获取任务列表数据
 */
export function fetchTodoList() {
  const data = JSON.parse(localStorage.getItem(LOCAL_KEY)) || [];
  // console.log('fetchTodoList => ', data);
  return data;
}

/**
 * 存储任务列表数据
 * @param {Array} data 任务列表数据
 */
export function saveTodoList(data) {
  localStorage.setItem(LOCAL_KEY, JSON.stringify(data));
}

// 异步方法，暂时不知道该写到什么位置合适，先使用同步的来练习吧

// import delay from "./delay";

// const LOCAL_KEY = "todomvc";

// /**
//  * 获取任务列表数据
//  */
// export async function fetchTodoList() {
//   await delay(500);
//   const data = localStorage.getItem(LOCAL_KEY);
//   if (data) return data;
//   else return [];
// }

// /**
//  * 存储任务列表数据
//  * @param {Array} data 任务列表数据
//  */
// export async function saveTodoList (data) {
//   await delay(500);
//   localStorage.setItem(LOCAL_KEY, JSON.stringify(data));
// }