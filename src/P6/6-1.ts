/* P6 */
// 类型声明

/* 声明语句 */
// 如果引入第三方库，则需要声明类型
// 例如JQuery

$('#button').click();   // 找不到名称 "$"。是否需要安装 jQuery 的类型定义? 请尝试使用 `npm i --save-dev @types/jquery`。

// 声明后
declare var $: any; // 使用let conts 都行
$('#button').click();   // 不报错

// 更加具体的声明
declare var $: (selector: string) => {
    click(): void
    width(length: number): void
};

$('#button').click();   // 此时则有了click和width语法提示



/* 命名空间 */
// namespace是早期TS为了解决module关键字

// 定义方法
declare namespace jQ_6101 {
    function ajax(url: string, settings: any): void;
}
jQ_6101.ajax

// 定义属性
declare namespace jQ_6102 {
    const version: number;
}
jQ_6102.version

// 定义内部方法
declare namespace jQ_6103 {
    namespace fn {
        function extend(obj: any): void;
    }
}
jQ_6103.fn.extend({})



/* 声明文件 */
// 打包为*.d.ts文件
// 通过 tsconfig 的 "include": "*.d.ts" 引入
// 但通过会新建一个typings文件夹进行存放

$_6104('#button').click();



/* 第三方声明文件 */
// 通过 npm i --save-dev @types/jquery 安装
// @types 是约定的前缀，表示第三方库的类型定义



/* npm 模块的声明文件 */
// declare 声明是最简单，npm包则使用 import 进行导入
// 例如这里使用了 npm i --save jquery
// 还安装了 npm i --save-dev @types/jquery

/* 已声明“jQuery”，但从未读取其值。ts(6133)
模块 ""E:/w/typescript_demo/node_modules/@types/jquery/index"" 只能在使用 "esModuleInterop" 标志时进行默认导入ts(1259)
index.d.ts(34, 1): 此模块是使用 "export =" 声明的，只能在使用 "esModuleInterop" 标志时进行默认导入。
 */

//import jQuery from 'jquery';    // 因为jQ是一个commonjs风格的模块，所以对于commonjs风格的需要使用 * as

import * as jQuery from 'jquery';

jQuery.ajax // 已经有正确的类型提示，因为按照了@types/jquery的声明文件

// 假设第三方库没有类型声明，则需要自己去写类型声明
// 在根目录创建 /types/jquery/index.d.ts
// tsconfig.json 中添加 "baseUrl": "./" 和 "paths": { "*": [ "./types/*" ] }
// 所以当没有第三方声明文件的时候，就会读取根目录下的 types/jquery/index.d.ts
// 然后在index.d.ts中exports
// 此处引入
import jQuery_6101, { a, bar, abc } from 'jquery';
jQuery_6101 //则能读取到function jQuery_6101(): string

a   //const a: string
bar() //bar(): string
abc.foo() //namespace abc / abc.foo(): string