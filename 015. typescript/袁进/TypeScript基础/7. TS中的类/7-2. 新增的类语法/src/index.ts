class User {
  readonly id: number;
  gender: "男" | "女" = "男";
  pid: string | undefined;
  private publishNumber: number = 3; // 每天一共可以发布多少篇文章
  private curNumber: number = 0; // 当前已经发布的文章数量
  constructor(public name: string, public age: number) {
    this.id = Math.random();
  }

  publish(title: string) {
    if (this.curNumber < this.publishNumber) {
      console.log(`${title}已发布`);
      this.curNumber++;
    } else {
      console.log("发布已达上线");
    }
  }
}

const u = new User("dahuyou", 23);