/**
 * 格式化时间戳
 */
export default (timestamp) => {
  const date = new Date(+timestamp);
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = (date.getDate()).toString().padStart(2, "0");
  return `${date.getFullYear()}-${month}-${day}`;
}