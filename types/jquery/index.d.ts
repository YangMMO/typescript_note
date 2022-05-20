export default function jQuery (): string

// declare 只在内部，同样需要export出去
declare const a:string
declare function bar(): string

export {
    a,
    bar
}

// 定义一个拥有子属性的对象
export namespace abc {
    function foo():string
}