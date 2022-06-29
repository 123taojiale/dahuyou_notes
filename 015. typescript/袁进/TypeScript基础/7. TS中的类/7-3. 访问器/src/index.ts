class User {
  readonly id: number;
  gender: "男" | "女" = "男";
  pid: string | undefined;
  private _publishNumber: number = 3;
  private _curNumber: number = 0;
  constructor(public name: string, private _age: number) {
    this.id = Math.random();
  }

  set age (value: number) {
    if (value < 0) this._age = 0;
    else if (value > 200) this._age = 200;
    else this._age = value;
  }

  get age () {
    return Math.floor(this._age);
  }

  publish(title: string) {
    if (this._curNumber < this._publishNumber) {
      console.log(`${title}已发布`);
      this._curNumber++;
    } else {
      console.log("发布已达上线");
    }
  }
}

const u = new User("dahuyou", 23);
u.age = -1; // u.setAge(-1);
u.age = 1.5; // u.setAge(1.5);
u.age = 10000; // u.setAge(10000);
u.age; // u.getAge();