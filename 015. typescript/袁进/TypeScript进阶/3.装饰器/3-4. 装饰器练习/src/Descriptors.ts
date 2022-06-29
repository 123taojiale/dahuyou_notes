// 将类的描述信息保存到原型中
export function classDescriptor(description: string) {
  return function (target: new () => object) {
    target.prototype.$classDescription = description;
  };
}

// 将实例属性描述信息保存到实例中
export function propDescriptor(description: string) {
  return function (target: any, propName: string) {
    if (!target.$propDescriptions) target.$propDescriptions = [];
    target.$propDescriptions.push({
      propName,
      description,
    });
  };
}

// 打印描述信息
export function printObj(obj: any) {
  // 打印类描述信息
  if (obj.$classDescription) console.log(obj.$classDescription);
  else console.log(Object.getPrototypeOf(obj).constructor.name);
  // 打印属性描述信息
  if (!obj.$propDescriptions) obj.$propDescriptions = [];
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const prop = obj.$propDescriptions.find((p: any) => p.propName === key);
      if (prop) console.log(`\t${prop.description}: ${obj[key]}`);
      else console.log(`\t${key}: ${obj[key]}`);
    }
  }
}
