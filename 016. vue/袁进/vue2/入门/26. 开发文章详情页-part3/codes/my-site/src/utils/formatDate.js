/**
 * 格式化时间戳
 * @param {String} timestamp 时间戳
 * @param {Boolean} isShowTime 是否显示 时分秒
 */
export default (timestamp, isShowTime) => {
  const date = new Date(+timestamp);
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = (date.getDate()).toString().padStart(2, "0");
  let result = `${date.getFullYear()}-${month}-${day}`;
  if (isShowTime) {
    const hour = date.getHours().toString().padStart(2, "0");
    const minute = date.getMinutes().toString().padStart(2, "0");
    const second = date.getSeconds().toString().padStart(2, "0");
    result += ` ${hour}:${minute}:${second}`;
  }
  return result;
}