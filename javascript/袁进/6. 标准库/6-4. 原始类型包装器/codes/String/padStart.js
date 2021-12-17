'abc'.padStart(10); // "       abc"
'abc'.padStart(10, "foo"); // "foofoofabc"
'abc'.padStart(6, "123465"); // "123abc"
'abc'.padStart(8, "0"); // "00000abc"
'abc'.padStart(1); // "abc"


var hour = 12,
  minute = 8,
  second = 20;

console.log(`${hour.toString().padStart(2, "0")}:\
${minute.toString().padStart(2, "0")}:\
${second.toString().padStart(2, "0")}`); // 12:08:20