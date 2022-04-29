/* P2 */
// Array

/* 数组的类型 */

// 声明数组都为string
let myFriends_2301: string[] = ['aaa', 'bbb']
myFriends_2301.push(1)  //报错

// 声明数组都为联合类型
let myFriends_2302: (string | number)[] = ['aaa', 123]

// 声明数组都为Object
let myFriends_2303: {
    name: string,
}[] = [{ name: 'aaa' }, { name: 'bbb' }]
myFriends_2303.push(1)  //报错


/* 类型推论 - 数组 */

// 推论为string
let myFriends_2304 = ['aaa', 'bbb']
myFriends_2304.push(1)  //报错

// 推论为string | number
let myFriends_2305 = ['aaa', 'bbb', 7]
myFriends_2305.push(1)  //正确
myFriends_2305[2].toFixed(2)  //报错，推论为联合类型，非共有属性