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




/* 路径映射 */
// 指 from './sum' 或者 from 'react'



/* 动态 import */
// 传统的import 打包时合并为一个文件，无法按需加载
import sum from './sum'
document.getElementById('button').addEventListener('click', () => {
    alert(sum(1,2))
})


// 需要同时修改 tsconfig.json的module: 'esnext' 才支持这种语法 即一代的模块系统
// 动态的import() 动态的导入JS文件 写法1
document.getElementById('button').addEventListener('click', () => {
    import('./sum').then(module => {
        alert(module.default(1,2))  // 默认是default
    }
})

// 动态的import() 动态的导入JS文件 写法2
// webpack 独有语法，将打包的文件以指定的名字进行文件命名如 sum.bundle.js
document.getElementById('button').addEventListener('click', async () => {
    const sum = await import(/* webpackChunckName: "sum" */ './sum')
    alert(sum.default(1, 2))
})