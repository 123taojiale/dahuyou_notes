const s = '2015-5-1, 2019-06-19, 2000-04-28';

// 期望结果：2015/05/01, 2019/06/19, 2000/04/28
const reg = /(\d{4})-(\d{1,2})-(\d{1,2})/g;

const result1 = s.replace(reg, (match, g1, g2, g3) => {
  return `${g1}/${g2.padStart(2, '0')}/${g3.padStart(2, '0')}`;
})
console.log(result1); // => 2015/05/01, 2019/06/19, 2000/04/28

// 如果没有要求月份和日期的位数至少是两位，那么还可以这么写：
const result2 = s.replace(reg, `$1/$2/$3`);
console.log(result2); // => 2015/5/1, 2019/06/19, 2000/04/28