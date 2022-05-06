/* P2 */
// function

/* 函数的类型 */

//声明输入和输出的类型
function getName_2401(fristName: string, lastName: string): string {
    return fristName + ' ' + lastName
}
let myName = getName_2401('mmo', 'fun')  // 正确
let myName = getName_2401('mmo')  // 报错，缺少值
let myName = getName_2401('mmo', 'fun', '123')  // 报错，没定义值

//声明输入和输出的类型
function getName_2402(fristName: string, lastName?: string): string {
    if(!lastName) {
        return fristName
    }
    return fristName + ' ' + lastName
}
let myName = getName_2402('mmo', 'fun')  // 正确
let myName = getName_2402('mmo')  // 正确

//可选参数：默认值
function getName_2403(fristName: string, lastName: string = '666'): string {
    return fristName + ' ' + lastName
}
let myName = getName_2403('mmo', 'fun')  // 正确 [LOG]: "mmo fun" 
let myName = getName_2403('mmo')  // 正确 [LOG]: "mmo 666"


/* 类型推论 - 函数 */

// fristName, lastName推论为any，return推论为string(因为函数内进行string的拼接)
function getName_2404(fristName, lastName?) {
    return fristName + ' ' + lastName
}
let myName = getName_2404('mmo')

// fristName, lastName推论为any
function getName_2405(fristName, lastName?) {
    return fristName + '' + lastName
}
let myName = getName_2405('mmo')

// 自动推论为string
function getName_2406(fristName = 'mmo', lastName = '123') {
    return fristName + ' ' + lastName
}
let myName = getName_2406('mmo')


/* 函数表达式 vs 函数声明 */

// 函数声明
function getName_2407(fristName, lastName) {
    return fristName + lastName
}

// 函数表达式，匿名函数赋值给变量
let getName_2408 = function(fristName, lastName) {
    return fristName + lastName
}

// 通过类型别名 给变量定义类型
type GetUserNameFunc_2409 = (x: string, y: string) => string
let getName_2409: GetUserNameFunc_2409 = function (fristName, lastName) {
    return fristName + lastName
}

getName_2409('mmo','123')



/* 箭头函数 */

// 箭头函数 箭头函数没有this，所以不能被当做构造函数使用
let getName_2410 = (fristName: string, lastName: string): string => {
    return fristName + lastName
}

/* 函数的重载 */

// 错误示例
function double_2411(x: number | string): number | string {
    if(typeof x === 'number') {
        return x * 2
    } else {
        return x + "," + x
    }
}

double_2411(1).toFixed(2)   //报错，因为私有属性不能被调用
double_2411('1').length  //报错，因为私有属性不能被调用

// 正确示例 注意：函数重载从上往下匹配，多个函数定义有包含关系，需要把精确的放在最前面
function double_2412(x: number): number;
function double_2412(x: string): string;
function double_2412(x: number | string): number | string {
    if (typeof x === 'number') {
        return x * 2
    } else {
        return x + "," + x
    }
}

double_2412(1).toFixed(2)   //正确
double_2412('1').length  //正确