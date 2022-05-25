/* P7 */
// 模块系统

/* 标准模块系统 */
// 推荐使用 es6 导入导出语法

// 案例 1 
// sum.ts
export default function sum(a: number, b: number): number {
    return a + b;
}

// index.ts
import sum from './sum';


// 案例 2
// Animal.ts
export default class Animal {
    name: string;
}

// index.ts
import Animal from './Animal';


// 案例 3
// sum.ts
const myName = '张三';  //必须先定义一个变量
export default myName

// index.ts
import myName from './sum';


// 案例 4
// sum.ts
export const myName = '张三';  //必须先定义一个变量
export function sum(a: number, b: number): number {
    return a + b;
}

// index.ts
import { myName, sum } from './sum';


// 案例 5 同等于案例 4
// sum.ts
const myName = '张三';  //必须先定义一个变量
function sum(a: number, b: number): number {
    return a + b;
}

export {
    myName,
    sum
}

// index.ts
import { myName, sum } from './sum';


// 案例 6 组合导入
// sum.ts
export const myName = '张三';  //必须先定义一个变量
export default function sum(a: number, b: number): number {
    return a + b;
}

// index.ts
import sum, { myName } from './sum';


// 案例 7 导入所有
// sum.ts
export const myName = '张三';  //必须先定义一个变量
export function sum(a: number, b: number): number {
    return a + b;
}

// index.ts
import * from './sum';



