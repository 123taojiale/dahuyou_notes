import "reflect-metadata";

const metadataKey = Symbol("description");

// 添加元数据
export function descriptor(description: string) {
  return Reflect.metadata(metadataKey, description);
}

// 打印描述信息
export function printObj(obj: any) {
  const cons = obj.__proto__.constructor;
  // 打印类元信息
  if (Reflect.hasMetadata(metadataKey, cons)) console.log(Reflect.getMetadata(metadataKey, cons));
  else console.log(cons.name);
  // 打印属性元信息
  for (const key in obj) {
    if (Reflect.hasMetadata(metadataKey, obj, key))
      console.log(
        `\t${Reflect.getMetadata(metadataKey, obj, key)}: ${obj[key]}`
      );
    else console.log(`\t${key}: ${obj[key]}`);
  }
}
