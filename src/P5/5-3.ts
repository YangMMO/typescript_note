/* P5 深入类型系统 */
// 类型变换

/* 交叉类型 */
interface Mother {
    name: string
    hug(): void
}
interface Teacher {
    name: string
    teach(): void
}

type MotherAndTeacher = Mother & Teacher

// mt 则同时拥有了hug和teach的方法
let mt: MotherAndTeacher
mt.hug()
mt.teach()


/* ts 中的 typeof */
// 这是原场景，有很多冗余部分，比如修改类型结构无需维护多套
type People_5301 = {
    name: string
    age: number
}
let mmo_5301: People_5301 = {
    name: 'a',
    age: 18
}

function printName(p: People_5301) {
    console.log(p.name)
}

// 使用typeof关键字，只需要维护一套

let mmo_5302 = {
    name: 'a',
    age: 18,
    gender: 'm'
}

type People_5302 = typeof mmo_5302 

function printName(p: People_5302) {    // 该类型则 = mmo_5302
    console.log(p.name)
}



/* 索引访问操作符 */
interface People_5303 {
    name: string
    age: number
    job: {
        name: string
        type: string
    }
    hobbies:{
        name: string,
        timesPerWeek: number
    }[]
}

// 取People_5303的job结构
let mmo_5303: People_5303['job'] = {
    name: 'a',
    type: 'teacher'
}

// 第二种索引方式，取数组结构内的某一属性，此处无需考虑取的下标是第几个，因为都是一样的
let swimTimesPerWeek: People_5303['hobbies'][0]['timesPerWeek'] = 3


/* keyof 索引类型查询操作符 */
interface People_5304 {
    name: string
    age: number
    gender: 'male' | 'female'
}

type PeopleKey_5304 = 'name' | 'age' | 'gender' //常见写法
type PeopleKey_5305 = keyof People_5304  // 使用keyof关键字，效果等同于上面

function getPeopleValueByKey(p: People_5304, key: PeopleKey_5305) {
    return p[key]
}



/* 映射类型 */
interface People_5306 {
    name: string
    age: number
    gender: 'male' | 'female'
}

type PeopleKey_5306 = 'name' | 'age' | 'gender'

type PartialPeople_5306 = {
    [K in PeopleKey_5306]?: People_5306[K]  // 使用in操作符，将PeopleKey的每一项作为可选项
}

// 报错，缺少age、gender
let mmo_5306: People_5306 = {
    name: 'mmo'
}

// 正确, 每一项都是可选项
let aab_5306: PartialPeople_5306 = {
    name: 'mmo'
}

// 去除掉PeopleKey，最终可简写为
type PartialPeople_5307 = {
    [K in keyof People_5306]?: People_5306[K]
}

// 另一种泛型写法, 用于将任何类型T都转化为可选类型T
type Part<T> = {
    [K in keyof T]?: T[K]
}
let ccd:Part<People_5306> = {   // 泛型使用方式，实现同样的效果
    name: 'mmo'
}



/* 条件类型 */
type Beef = { beefWight: number }
type Fish = { fishWight: number }
type Lamb = { lambWight: number }

type StoneBaked<T> = T & {
    stoneTemperature: number
}
type FireBaked<T> = T & {
    fireTemperature: number
}

// 如果 传入的是Beef，则使用的是StoneBaked...
type Baked<T> = 
    T extends Beef ? StoneBaked<T> :
    T extends Fish ? FireBaked<T> :
        StoneBaked<T>

// 每个声明都拥有自己的方法
let b: Baked<Beef>
let f: Baked<Fish>
let l: Baked<Lamb>