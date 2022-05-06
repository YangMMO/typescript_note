/* P2 */
// 扩展类型

/* never */
// 返回never的函数 必须存在 无法达到（ unreachable ） 的终点
function error(message: string): never {
    throw new Error(message);
}

// 由类型推论得到返回值为 never
function fail() {
    return error("Something failed");
}

// 返回never的函数 必须存在 无法达到（ unreachable ） 的终点
function infiniteLoop(): never {
    while (true) {
    }
}

// 具体查看资料....


/* 字符串、数字、布尔值字面量 */
// 通过类型别名来定义新的类型
type favoriteNumber = 'Seven' | 'One' | 7 | true;
let seven_2501:favoriteNumber = 'Seven';    //正确
let seven_2502: favoriteNumber = 1; //报错
let seven_2503: favoriteNumber = 7; //正确
let seven_2504: favoriteNumber = true;  //正确
let seven_2505: favoriteNumber = false; //报错


/* 元组 */
// 元组用[]表示
let mmo_2501: [string, string, number] = ['mmo', 'fun', 18];

mmo_2501[0].length;     //正确
mmo_2501[1] = 'MMO';     //正确
mmo_2501[2] = 18.5;     //正确
mmo_2501[2] = 'MMO';     //报错 不能将类型“string”分配给类型“number”
mmo_2501[3] = 'fun';     //报错 不能将类型“"fun"”分配给类型“undefined”

mmo_2501 = ['mmo', 'fun', 18]; //正确
mmo_2501 = ['mmo', 'fun']; //报错 源具有 2 个元素，但目标需要 3 个

// 或者定义类型别名
type Person_2501 = [string, string, number];
let mmo_2502: Person_2501 = ['mmo', 'fun', 18];

// 元组：每一项可以是不同类型、有预定义的长度、用于表示一个结构
// 数组：每一项都是同一种类型、没有长度的限制、用于表示一个列表


/* 枚举 */
// 这是js枚举的原型
const Colors_2501 = {
    red: '#ff0000',
    blue: '#0000ff',
    green: '#00ff00'
}

function isItRed_2501(color) {
    return color === Colors_2501.red;
}

isItRed_2501(Colors_2501.red)
isItRed_2501(Colors_2501.blue)

// ts 中的枚举的书写方式
enum Colors_2502 {
    Red,    // (enum member) Colors_2502.Red = 0
    Blue,   // (enum member) Colors_2502.Blue = 1
    Green   // (enum member) Colors_2502.Green = 2
}

function isItRed_2502(color: Colors_2502) { // 添加接受类型
    return color === Colors_2502.Red;
}

isItRed_2502(Colors_2502.Red)
isItRed_2502(Colors_2502.Blue)

// 枚举赋值
// 如果指定第一个，则后面的自动加1
enum Colors_2503 {
    Red = 2,    // (enum member) Colors_2502.Red = 2
    Blue,   // (enum member) Colors_2502.Blue = 3
    Green   // (enum member) Colors_2502.Green = 4
}

// 赋值为字符串，第一个值一旦赋值为字符串，枚举成员必须具有初始化表达式
enum Colors_2504 {
    Red = 'red',    // (enum member) Colors_2502.Red = "red"
    Blue,   // 报错 枚举成员必须具有初始化表达式。
    Green = 'green'   // (enum member) Colors_2502.Green = "green"
}

// 这种赋值是没问题的
enum Color_2505 { Red, Green, Blue = "blue".length };
