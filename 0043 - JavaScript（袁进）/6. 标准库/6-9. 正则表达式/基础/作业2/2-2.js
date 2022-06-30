var reg = /[\u4e00-\u9fa5]/g;
var s = "fgdgg啊手动sdf阀梵蒂冈sd234";
console.log(`共有${s.match(reg).length}个汉字`); // 共有7个汉字