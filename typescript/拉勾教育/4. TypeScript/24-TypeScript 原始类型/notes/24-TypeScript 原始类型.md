## 24-TypeScript 原始类型

### 前言

- 时长：6min

### tsconfig.json

```json
{
  "compilerOptions": {
    /* Visit https://aka.ms/tsconfig.json to read more about this file */
    /* Language and Environment */
    "target": "es5", /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */
    /* Modules */
    "module": "commonjs", /* Specify what module code is generated. */
    "rootDir": "./src", /* Specify the root folder within your source files. */
    /* Emit */
    "sourceMap": true, /* Create source map files for emitted JavaScript files. */
    "outDir": "./dist", /* Specify an output folder for all emitted files. */
    /* Type Checking */
    "strict": true, /* Enable all strict type-checking options. */
  }
}
```

为了后续相关内容的介绍，现学习阶段，先统一这么配置，后边若有一些特殊情况，再对 tsconfig.json 文件中的内容做修改。

```shell
├─dist
└─src
    1.ts
```

### [strictNullChecks](https://www.typescriptlang.org/tsconfig#strictNullChecks)

默认情况下，null 和 undefined 类型，会跳过类型检查。因此，当我们将它们赋值给其他类型时，都是被允许的，并不会报错。

严格模式下，默认开启了严格的空类型检查。当开启了严格的空类型检查后，null 和 undefined 就有了自己的类型，它们将无法跳过类型检查，也就是说，null 和 undefined 只能赋给自身。

### void

void 类型，一般用于表示函数的返回值为空。

```ts
const hello = (name) :void => {
  console.log(`Hello, ${name}`);
}
hello("TypeScript");
```

### codes

- [ ] 1.ts

```ts
/**
 * 原始数据类型
 */
const a: string = "foobar";

const b: number = 100; // NaN // Infinity

const c: boolean = true; // false
```

