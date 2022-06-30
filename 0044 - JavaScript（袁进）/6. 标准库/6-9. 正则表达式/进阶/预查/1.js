var s = "sdfsdf3434343sdfsa545454dfsdfsfsd6754";
var reg = /[a-zA-Z](\d+)/g;
while (result = reg.exec(s)) {
  console.log(result);
}
/* output
[
  'f3434343',
  '3434343',
  index: 5,
  input: 'sdfsdf3434343sdfsa545454dfsdfsfsd6754',
  groups: undefined
]
[
  'a545454',
  '545454',
  index: 17,
  input: 'sdfsdf3434343sdfsa545454dfsdfsfsd6754',
  groups: undefined
]
[
  'd6754',
  '6754',
  index: 32,
  input: 'sdfsdf3434343sdfsa545454dfsdfsfsd6754',
  groups: undefined
]
*/