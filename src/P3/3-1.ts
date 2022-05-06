/* P3 */
// 属性和方法

/* 在TS中对类的定义 */
class Cat_3101 {
    name: string;
    sayHello(): string {
        return 'Hello, ' + this.name;
    }
}

let tom_3101 = new Cat_3101();
tom_3101.name = 'Tom'

console.log(tom_3101.sayHello());


/* 类的构造函数 */
class Cat_3102 {
    name: string;
    constructor(name: string) {    // 使用constructor
        this.name = name
    }
    sayHello(): string {
        return 'Hello, ' + this.name;
    }
}

let tom_3102 = new Cat_3102("Tom");

console.log(tom_3102.sayHello()); 

