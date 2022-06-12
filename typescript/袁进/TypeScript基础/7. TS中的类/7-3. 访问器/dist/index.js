class User {
    constructor(name = "dahuyou", age) {
        this.name = name;
        this.age = age;
        this.gender = "男";
        this.publishNumber = 3;
        this.curNumber = 0;
        this.id = Math.random();
    }
    publish(title) {
        if (this.curNumber < this.publishNumber) {
            console.log(`${title}已发布`);
            this.curNumber++;
        }
        else {
            console.log("发布已达上线");
        }
    }
}
const u = new User("dahuyou", 23);
