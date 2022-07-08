// 依据当前可见类型 过滤展示列表
export default (todolist, visibility) => {
  return todolist.filter((item) => {
    if (visibility === '') return true;
    else if (visibility === 'active') return !item.completed;
    else return item.completed;
  });
}