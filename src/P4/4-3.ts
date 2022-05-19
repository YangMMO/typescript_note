/* P4 */
// 泛型

/* 泛型类型别名 */
// 接口与别名类似，用法一致
type ListApi_4202<T> = {
    data: T[]
    error_message: string
    state_code: number
} | T[]     //但是区别在于别名可以表达更复杂的类型，interface无法表达复杂的类型

// 使用接口时指定类型
let listResult_4202: ListApi_4202<{ name: string, age: number }>

// 定义变量
let firstItem_4202 = listResult_4202.data[0]    // 变量推论出来是{ name: string, age: number}