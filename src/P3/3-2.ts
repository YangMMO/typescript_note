/* P3 */
// 修饰符

/* 访问控制修饰符 */
class Cat_3201 {
    public name: string;
    constructor(name: string) {
        this.name = name
        this.sayHi();   //正确 因为是子类方法
    }
    protected sayHi(): string {
        return 'Hi, ' + this.name;
    }
    private sayHello(): string {
        return 'Hello, ' + this.name;
    }
}

let tom_3201 = new Cat_3201('Tom');
tom_3201.name = '123';  //正确 因为是public
tom_3201.sayHello();    //报错 属性“sayHello”为私有属性，只能在类“Cat_3201”中访问
tom_3201.sayHi();   //报错 属性“sayHi”受保护，只能在类“Cat_3201”及其子类中访问。


/* 只读属性 */
class Cat_3202 {
    private readonly name: string;  // 添加readonly修饰符，一个属性支持多个修饰符

    constructor(name: string) {
        this.name = name
    }
    changeName(name: string) {
        this.name = name    //此时报错，因为name是只读属性
    }
    sayHi() {
        return `Hi, ${this.name}`;
    }
}


/* 静态属性 */
class Cat_3203 {
    static maxAge: number = 38;
    static setMaxAge(age: number) {
        Cat_3203.maxAge = age;  //可访问类的静态属性，非指向性this，而是指向类本身
    }

    private name: string;

    constructor(name: string) {
        this.name = name
    }
    sayHi() {
        return `Hi, ${this.name}`;
    }
}

let tom_3203 = new Cat_3203('Tom');
Cat_3203.maxAge = 40;  //正确 因为是静态属性
Cat_3203.setMaxAge(40);  //正确 因为是静态方法


/* 抽象类 */
// 用来描述抽象概念 无法被实例化 只能被继承
abstract class Animal_3204 {    //abstract抽象类
    name: string;
    sayHi():string {
        return 'Hi'
    }
    abstract sayHello(): string //在定义中不能有具体的实现，只能在继承中实现
}
let animal_3204 = new Animal_3204();  //报错，因为抽象类不能被实例化

// 被实例化的比如猫、狗
class Cat_3204 extends Animal_3204 {
    sayHi() {
        return `Meow, my name is ${this.name}`;
    }
    sayHello(): string {    //这是在继承中实现
        return 'Hello, ' + this.name;
    }
}

class Dog extends Animal_3204 { // 必须得继承abstract方法
    sayHello() {
        return 1    //报错 sayhello必须满足定义的类型string
    }
}