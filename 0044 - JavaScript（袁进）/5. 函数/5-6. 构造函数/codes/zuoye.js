/**
 * 游戏角色的构造函数
 * @param {*} name      角色名字
 * @param {*} attack    攻击力
 * @param {*} defence   防御力
 * @param {*} hp        生命值
 * @param {*} critRate  暴击率(0~100)
 */
function Charactor(name, attack, defence, hp, critRate) {
    this.name = name;
    this.attack = attack;
    this.defence = defence;
    this.hp = hp;
    this.critRate = critRate;

    //函数
    /**
     * 打印信息
     */
    this.print = function () {
        console.log(`${this.name}\t攻击力：${this.attack}\t防御力：${this.defence}\t生命值：${this.hp}\t暴击率：${this.critRate}%`)
    }
    /**
     * 攻击，返回是否有一方死亡
     * @param {*} ctor 攻击对象
     */
    this.hit = function (ctor) {
        //计算伤害
        var damage = this.attack - ctor.defence;
        //判断是否暴击
        var isCrit = false;
        var rad = Math.random();
        var rate = critRate / 100;
        if (rad < rate) {
            //有暴击
            isCrit = true;
            damage *= 2;//伤害翻倍
        }
        //伤害至少为1点
        if (damage < 1) {
            damage = 1;
        }
        //计算hp
        ctor.hp -= damage;
        //hp至少为0
        if (ctor.hp < 0) {
            ctor.hp = 0;
        }
        console.log(`${isCrit ? "暴击！" : ""}【${this.name}】对【${ctor.name}】造成了【${damage}】点伤害，对方的血量为【${ctor.hp}】点`);
        return ctor.hp === 0;
    }
}

var hero = new Charactor("英雄", 200, 20, 1000, 50);
hero.print();
console.log("VS")
var monster = new Charactor("怪兽", 120, 80, 1500, 5);
monster.print();
while(true){
    if(hero.hit(monster)){
        break;
    }
    if(monster.hit(hero)){
        break;
    }
}
console.log("===============");
hero.print();
monster.print();
console.log("游戏结束");