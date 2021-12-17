var Gender;
(function (Gender) {
    Gender["Male"] = "\u7537";
    Gender["female"] = "\u5973";
})(Gender || (Gender = {}));
function printGenders() {
    const vals = Object.values(Gender);
    vals.forEach((v) => console.log(v));
}
printGenders();
/*
男
女
*/ 
