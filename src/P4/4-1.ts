/* P4 */
// 泛型

/* 泛型函数 */
// 通过函数名后加<T>，表示该函数是一个泛型函数
// valeus可以是任意类型T
// 返回的数组中的元素类型是T
function createArray_4101<T>(value: T, length: number): T[]{
    let arr = []
    for (let i = 0; i < length; i++) {
        arr[i] = value        
    }
    return arr
}

// 使用函数时，通过<...>来确认输入的类型
let fooArray_4101 = createArray_4101<string>('foo', 3)
console.log(fooArray_4101)  // [ 'foo', 'foo', 'foo' ]

let fooArray_4102 = createArray_4101<number>(9, 3)
console.log(fooArray_4102)  // [ 9, 9, 9 ];

// 非泛型函数无得取得内部值的类型方法，但通过泛型可以获取
fooArray_4102.push(1)


/* 泛型的作用域 */
function createArray_4102<T>(value: T, length: number): T[] {
    let arr = []    //  默认是any[]类型
    for (let i = 0; i < length; i++) {
        arr[i] = value
    }
    return arr
}

// 通过在函数内部使用<T>来确认arr的类型
function createArray_4103<T>(value: T, length: number): T[] {
    let arr: T[] = []    //  则为是T[]类型
    for (let i = 0; i < length; i++) {
        arr[i] = value
    }
    return arr
}

// 注意：函数外部无法使用<T>
let foo_4103: T[];  //  报错


/* 泛型的类型推论 */
function createArray_4104<T>(value: T, length: number): T[] {
    let arr: T[] = []
    for (let i = 0; i < length; i++) {
        arr[i] = value
    }
    return arr
}

let fooArray_4104 = createArray_4104('foo', 3)  //  删除<...>依旧推论为<string>


/* 多个类型参数 */
// 此时推论为输入的是any输出的是any[]
function swap_4105(tuple) {
    return [tuple[1], tuple[0]]
}
let  swapped_4105 = swap_4105(['foo', 7])   //  [ 7, 'foo' ]

// 添加多个泛型参数
function swap_4106<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]]
}
// 此时可以定义输入的类型，如果不定义也会自动推论出<string, number>
let swapped_4106 = swap_4106<string, number>(['foo', 7])   //  [ 7, 'foo' ]
let swapped_4107 = swap_4106(['foo', 7])   //  [ 7, 'foo' ]


/* 默认类型 */
// 如果希望这个函数默认不传入参数(即agruements.length为0)
function createArray_4107<T>(value?: T, length?: number): T[] {
    if( arguments.length === 0){
        return []
    }
    let arr: T[] = []
    for (let i = 0; i < length; i++) {
        arr[i] = value
    }
    return arr
}

let fooArray_4107 = createArray_4107()  //  泛型被推论为未知<unknown>，返回值也是unknown[]

// 第一种方式指定泛型
let fooArray_4108 = createArray_4107<string>()  //  泛型被推论为<string>，返回值也是string[]

// 第二种使用默认类型
function createArray_4108<T = string>(value?: T, length?: number): T[] {
    if (arguments.length === 0) {
        return []
    }
    // ..
}
let fooArray_4109 = createArray_4108()  //  泛型被推论为<string>，返回值也是string[]