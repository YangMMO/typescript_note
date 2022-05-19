/* P5 深入类型系统 */
// 结构类型系统

/* 接口的兼容性 */
// TS允许不同类型的变量可以兼容
interface People_5101 {
    name: string;
    age: number;
    // a: string;  // 如果新增不会报错，因为people已包含person的name/age
}

let MMO_5101: People_5101

interface Person_5101 {
    name: string;
    age: number;
    // b: string;  // 如果新增此属性，则会报错，因为传入的源MMO并没有b属性
}

function echoName(p: Person_5101):string {  //传入的是person类型
    return p.name
}

echoName(MMO_5101)  //但是调用传入的是people类型，TSd会声明的MMO与函数需传入Person类型做兼容性判断
// 即（目标类型：Person） 是否能兼容（源类型：People）

let a_5101 = {
    name: 'a',
    age: 18,
    c: 'c'
}
MMO_5101 = a_5101   // 赋值不会进行兼容性比较


/* 基础类型的兼容性 */
// TS结构类型系统，是否兼容只会对比两者的结构
let foo_5102: number
let bar_5102: string
foo_5102 = bar_5102 // 报错


let foo_5103: number | string
let bar_5103: string
foo_5103 = bar_5103 // 正确


let foo_5104: {
    toString(): string  // 假设有一个toString则正确，返回number则报错
}
let bar_5104: string
foo_5104 = bar_5104 // 正确


let foo_5105: {
    toString(): string
    abc(): string   // 结果发送改变
}
let bar_5105: string
foo_5105 = bar_5105 // 报错 不能将类型“string”分配给类型“{ toString(): string; abc(): string; }”。

let foo_5106: {
    substring(): string   
}
let bar_5106 = new String('')
foo_5106 = bar_5106 // 报错,因为结构类型系统只对比两者的结构


/* 类的兼容性 */
// 例子1
class Animal_5107 {
    name: string
}
class Cat_5107 extends Animal_5107 {
    tailLength: number
}
let a_5107: Animal_5107
a_5107 = new Cat_5107() // 正确 父类兼容子类
let c_5107: Cat_5107
c_5107 = new Animal_5107() // 报错 子类不兼容父类; 类型 "Animal_5107" 中缺少属性 "tailLength"，但类型 "Cat_5107" 中需要该属性

// 例子2
class Duck {
    name: string
    swim() {
        console.log('swim')
    }
}
class Dog {
    name: string
    swim() {
        console.log('swim')
    }
    bite() {
        console.log('bite')
    }
}
let d_5108: Duck
d_5108 = new Dog()
d_5108.bite //报错 即使变更为Dog类型，也只拥有Duck类型的方法，不会有Dog类型的方法


/* 函数的兼容性 */
// 1.先比较函数参数，2.再比较函数返回值
// 比较函数参数会引入概念：函数参数的双向协变

// 例子1
type sumFunc_5109 = (x: number, y: number) => number
let sum_5109: sumFunc_5109
function f1_5109(x: number, y: number): number {
    return x + y
}
sum_5109 = f1_5109  // 正确

// 例子2
function f2_5109(x: number): number {
    return x + 0
}
sum_5109 = f2_5109 // 正确

// 例子3
function f3_5109(): number {
    return 0
}
sum_5109 = f3_5109 // 正确

// 例子4
function f4_5109(x: number, y: number, z: number): number {
    return x + y +z
}
sum_5109 = f4_5109 // 报错
// 从以上4个例子可以看出，TS允许忽略额外的参数

// 例子5
let numbers = [1,2,3]
numbers.forEach((number, index, array) => {
    console.log(number);
})
numbers.forEach((number) => {
    console.log(number);
})
// JS中允许忽略额外参数，所以TS也允许忽略额外参数


// 比较函数输出 例子1
type GetPeople_5109 = () => { name: string , age: number }
let getPeople_5109: GetPeople_5109
function g1_5109() {
    return { name: 'a', age: 18 }
}
getPeople_5109 = g1_5109 // 正确

// 比较函数输出 例子2
function g2_5109() {
    return { name: 'a', age: 18, gender: 'male' }
}
getPeople_5109 = g2_5109 // 正确

// 比较函数输出 例子3
function g3_5109() {
    return { name: 'a'}
}
getPeople_5109 = g3_5109 // 报错
// 从以上例子可以看出，返回值必须是兼容的

// 比较函数输出 例子4
type GetPeople_5110 = () => { name: string, age: number }
let getPeople_5110: GetPeople_5110
function g3_5110() {
    return { name: 'a' }
}
getPeople_5109 = g3_5109 // 报错
getPeople_5110().age.toFixed() // 正确, 因为TS认为这是正确的操作, 但在JS中会认为是错的，所以要保证返回值的安全性


/* 函数参数的双向协变 */
type LogFunc_5110 = (a: number | string) => void
let log_5110: LogFunc_5110

function l1_5110(a: number) {
    console.log(a);
}
log_5110 = l1_5110 // 正确的话是因为 老版本 V2.6 前，后续版本不允许

function l2_5110(a: number | string | boolean) {
    console.log(a);
}
log_5110 = l2_5110 // 正确 新版本必须（目标 l2）兼容（源 LogFunc）,不再双向协变

function l3_5110(a: boolean) {
    console.log(a);
}
log_5110 = l3_5110 // 报错



/* 泛型的兼容性 */
// 例子1
interface Empty_5111<T> {}
let x_5111: Empty_5111<number>
let y_5111: Empty_5111<string>
x_5111 = y_5111 // 正确

// 等价于
interface Empty_5112 {}
let x_5112: Empty_5112
let y_5112: Empty_5112
x_5112 = y_5112 // 正确


// 例子2
interface NotEmpty_5113<T> {
    data: T
}
let x: NotEmpty_5113<number>
let y: NotEmpty_5113<string>
x = y // 报错

// 等价于
interface NotEmptyString_5114 {
    data: string
}
interface NotEmptyNumber_5114 {
    data: number
}
let x1: NotEmptyString_5114
let y1: NotEmptyNumber_5114
x1 = y1 // 报错



/* 枚举的兼容性 */
enum Colors_5115 { Red, Blue}

let c: Colors_5115

c = Colors_5115.Red // 正确
c = 1 // 正确 因为enum是枚举类型，可以赋值为数字
c = 'Red' // 报错 不允许字符串类型的'1'赋值给c

// 反过来，也可以将枚举复制给number类型
let n: number
n = 1 // 正确
n = Colors_5115.Red // 正确

// 结论：枚举和数字类型相互兼容

