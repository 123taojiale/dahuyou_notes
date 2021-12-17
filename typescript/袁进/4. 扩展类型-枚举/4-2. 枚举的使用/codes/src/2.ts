enum Gender {
  Male = "男",
  female = "女",
}

function printGenders() {
  const vals = Object.values(Gender);
  vals.forEach((v) => console.log(v));
}
printGenders();
/*
男
女
*/