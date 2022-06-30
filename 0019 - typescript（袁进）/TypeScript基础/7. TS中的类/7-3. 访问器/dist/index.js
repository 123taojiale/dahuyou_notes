class User {
    constructor(name, _age) {
        this.name = name;
        this._age = _age;
        this.gender = "男";
        this._publishNumber = 3;
        this._curNumber = 0;
        this.id = Math.random();
    }
    set age(value) {
        if (value < 0)
            this._age = 0;
        else if (value > 200)
            this._age = 200;
        else
            this._age = value;
    }
    get age() {
        return Math.floor(this._age);
    }
    publish(title) {
        if (this._curNumber < this._publishNumber) {
            console.log(`${title}已发布`);
            this._curNumber++;
        }
        else {
            console.log("发布已达上线");
        }
    }
}
const u = new User("dahuyou", 23);
u.age = -1;
u.age = 1.5;
u.age = 10000;
u.age;
