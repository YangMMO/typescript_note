/* P3 */
// 类的继承

/* 类的继承 */
class Animal_3301 {
    name: string;
    sayHi() {
        console.log(`hi`); 
    }
}

class Cat_3301 extends Animal_3301 {    //子类Cat继承父类Animal
    sayHi() {   //继承父类的方法，但是此处重写了方法
        console.log(`${this.name}`);
    }
    catchMouse() {
        console.log(`捉到老鼠`);
    }
}


/* this与super */
class Animal_3302 {
    name: string;
    constructor(name: string) {
        this.name = name
    }
    sayHi() {
        console.log(`hi`);
    }
}

class Cat_3302 extends Animal_3302 {
    tailLentgh: number;
    constructor(name: string, tailLength: number) {
        super(name)
        this.tailLentgh = tailLength
    }
    sayHi() {
        console.log(`我叫：${this.name}，我的尾巴长度是${this.tailLentgh}`);
    }
    catchMouse() {
        console.log(`捉到老鼠`);
        this.sayHi();   //使用this调用子类的方法
        super.sayHi();  //使用super调用父类的方法
    }
}

let cat_3302 = new Cat_3302('Tom', 123)
cat_3302.catchMouse()


/* 类实现接口 */
// 通过interface约束接口类型
interface Wings_3301 {
    fly(): void;
}

// implements实现接口的类都有同一个方法
class Bird_3301 implements Wings_3301 {
    fly(): void {
        console.log('bird fly');
    }
    jump() {
        console.log('bird jump');
    }
}

class Bee_3301 implements Wings_3301 {
    fly(): void {
        console.log('bee fly');
    }
    honey() {
        console.log('bee honey');
    }
}

// 一个类继承另一个类，再实现多个接口
interface Wings_3302 {
    fly(): void;
}

interface Mouth_3302 {
    sing(): void;
}

// 抽象类
abstract class Animal_3205 {
    abstract eat(): void;
}

// Bird继承animal，实现了wings和mouth接口
class Bird_3302 extends Animal_3205 implements Wings_3302, Mouth_3302 {
    fly(): void {
        console.log('bird fly');
    }
    eat(): void {
        console.log('bird eat');
    }
    sing(): void {
        console.log('bird sing');
    }
}


/* 接口继承接口 */
interface Mouth_3302 {
    sing(): void;
}

// Dragon继承Mouth接口
interface DragonMouth_3302 extends Mouth_3302 {
    fire(): void;
}

class Dragon_3302 implements DragonMouth_3302 {
    sing(): void {
        console.log('dragon sing');
    }
    fire(): void {
        console.log('dragon fire');
    }
}


/* 接口继承类 */
class Dragon_3303 {
    fly() {
        console.log('dragon fly');
    }
}

interface FireDragon_3303 extends Dragon_3303 {
    fire(): void;
}

let f: FireDragon_3303 = {
    fire: function() {
        console.log('fire');
    },
    fly: () => {}
}


/* g构造函数的类型 */

// 用 INumber 来描述 NumberClass 的形状
interface INumber {
    n: number;
    double(n: number): number
}
// 构造一个 NumberClass 类
class NumberClass implements INumber {
    constructor(public n: number) {
        console.log('n is ' + n)
    }
    double(n: number) {
        return 2 * n;
    }
}

// 用 new() 来描述 NumberClass 的构造函数类型
interface INumberClassConstructable {
    new(n: number): INumber
}

// 该方法接受一个类，并将之实例化，利用 INumberClassConstructable 就可以约束实例化时传递给 clazz 构造函数的参数是准确的
function buildNumber(clazz: INumberClassConstructable) {
    return new clazz(1)
}

let a = buildNumber(NumberClass)
console.log(a)
let b = a.double(1)
console.log(b)