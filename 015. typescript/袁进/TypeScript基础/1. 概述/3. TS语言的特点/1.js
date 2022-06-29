function getUserName() {
  if (Math.random() < 0.5) {
    return "da hu you";
  }
  return 404;
}
var myname = getUserName();
if (typeof myname === "string") {
  myname = myname
    .split(" ")
    .filter(function (it) {
      return it;
    })
    .map(function (it) {
      return it[0].toUpperCase() + it.substr(1);
    })
    .join("");
}