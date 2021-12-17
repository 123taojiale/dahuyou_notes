const os = require("os");

// 一行结束的分隔符
console.log('os.EOL => ', os.EOL);
// => 非 windows /n
// => windows /r/n

// 获取 cpu 的架构名
console.log('os.arch() => ', os.arch())
// os.arch() =>  x64

// 获取 cpu 每一个核的信息
console.log('os.cpus() => ', os.cpus(), os.cpus().length);
/*
os.cpus() =>  [
  {
    model: '11th Gen Intel(R) Core(TM) i5-1135G7 @ 2.40GHz',
    speed: 2419,
    times: {
      user: 13802468,
      nice: 0,
      sys: 10340843,
      idle: 166914265,
      irq: 1660156
    }
  },
  {
    model: '11th Gen Intel(R) Core(TM) i5-1135G7 @ 2.40GHz',
    speed: 2419,
    times: {
      user: 13259562,
      nice: 0,
      sys: 6036093,
      idle: 171761671,
      irq: 262671
    }
  },
  {
    model: '11th Gen Intel(R) Core(TM) i5-1135G7 @ 2.40GHz',
    speed: 2419,
    times: {
      user: 15781015,
      nice: 0,
      sys: 7870468,
      idle: 167405859,
      irq: 396250
    }
  },
  {
    model: '11th Gen Intel(R) Core(TM) i5-1135G7 @ 2.40GHz',
    speed: 2419,
    times: {
      user: 17899343,
      nice: 0,
      sys: 7417875,
      idle: 165740109,
      irq: 476406
    }
  },
  {
    model: '11th Gen Intel(R) Core(TM) i5-1135G7 @ 2.40GHz',
    speed: 2419,
    times: {
      user: 17138125,
      nice: 0,
      sys: 7450828,
      idle: 166468375,
      irq: 341328
    }
  },
  {
    model: '11th Gen Intel(R) Core(TM) i5-1135G7 @ 2.40GHz',
    speed: 2419,
    times: {
      user: 18967406,
      nice: 0,
      sys: 7170750,
      idle: 164919187,
      irq: 368265
    }
  },
  {
    model: '11th Gen Intel(R) Core(TM) i5-1135G7 @ 2.40GHz',
    speed: 2419,
    times: {
      user: 22912812,
      nice: 0,
      sys: 7742781,
      idle: 160401734,
      irq: 307734
    }
  },
  {
    model: '11th Gen Intel(R) Core(TM) i5-1135G7 @ 2.40GHz',
    speed: 2419,
    times: {
      user: 28428968,
      nice: 0,
      sys: 7887359,
      idle: 154741000,
      irq: 317859
    }
  }
] 8
*/

// 获取当前还有多少内存可用（单位是字节）
console.log(os.freemem() / 2 ** 30); // => 3.6923370361328125

// 返回当前用户的主目录的字符串路径。
console.log(os.homedir()); // => C:\Users\dahuyou

// 以字符串形式返回操作系统的主机名。
console.log(os.hostname()); // => dahuyouのLenovo

// 以字符串形式返回操作系统默认的临时文件的目录。
console.log(os.tmpdir()); // => C:\Users\dahuyou\AppData\Local\Temp