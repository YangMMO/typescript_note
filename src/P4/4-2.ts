/* P4 */
// 泛型

/* 泛型接口 */
interface ListApi_4201<T> {
    data: T[]
    error_message: string
    state_code: number
}

// 使用接口时指定类型
let listResult_4201: ListApi_4201<{ name: string, age: number}>

// 定义变量
let firstItem_4201 = listResult_4201.data[0]    // 变量推论出来是{ name: string, age: number}