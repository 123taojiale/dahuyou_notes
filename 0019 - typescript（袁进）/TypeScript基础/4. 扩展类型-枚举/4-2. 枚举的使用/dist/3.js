var Level;
(function (Level) {
    Level[Level["level1"] = 1] = "level1";
    Level[Level["level2"] = 2] = "level2";
    Level[Level["level3"] = 3] = "level3";
})(Level || (Level = {}));
let l = Level.level1;
l = Level.level2;
/*
枚举的字段值可以是字符串或数字；
*/ 
