/* P6 */
// 声明合并

/* 类型和值 */
class Animal_6201 {
    name: string;
}

// 作为类型使用
let animal_6201: Animal_6201;
// 作为值使用
let animal_6202 = new Animal_6201();

interface People_6203 {
    name: string;
}

// 作为类型使用
let people_6203: People_6203;
// 不能作为值使用
let people_6204 = new People_6203();    // 报错



/* 接口合并 */
interface People_6205 {
    name: string;
    age: number;
}

interface People_6205 {
    gender: 'male' | 'female'
}

let p: People_6205;
p.age   // 同样拥有name, age, gender属性
