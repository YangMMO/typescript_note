/* P2 */
// interface
interface Person {
    name: string,
    age?: number,
    [propName: string]: any
}

let mmo: Person = {
    name: 'mmo',
    age: 18,    
    gender: 'male'  
} 


const animal_22_1: {weight: number ; isMammal: boolean} = {
    weight: 10,
    isMammal: true
}

// 只读
interface Person1 {
    readonly id: number //实例化只读后续不能修改
    name: string,
    age?: number,
    [propName: string]: any
}

let a22_1: Person1 = {
    id: 1,
    name: 'mmo',
    age: 18,
    gender: 'male' 
} 


//类型推论 - 对象
let a22_2 = {
    name: 'mmo',
    gender: 'male' 
} 


//复杂的对象
interface Person22_3 {
    name: string,
    gender: string,
    friend: {
        name: string,
        gender: string,
    }
}

let a22_3: Person22_3 = {
    name: 'mmo',
    gender: 'male' ,
    friend: {
        name: 'aaa',
        gender: 'male'
    }
} 

const animal_22_2 = {
    weight: 10,
    isMammal: true
}


//递归的对象
interface Foo {
    bar: {
        foo: Foo
    }
}

let foo: Foo
let bar = {
    foo
}

foo.bar.foo.bar.foo


//类型别名
interface Person22_4 {
    name: string,
    gender: string,
    friend: {
        name: string,
        age: number,
    }
}

let a22_4: Person22_4 = {
    name: 'mmo',
    gender: 'male',
    friend: {
        name: 'aaa',
        age: 18,
        gender: 'male'
    }
} 