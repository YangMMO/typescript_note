/* P5 深入类型系统 */
// 类型保护

/* typeof 类型保护 */
// TS会在编译阶段检查typeof类型保护
function double(input: string | number | boolean) {
    if (typeof input === 'string') {    // 这个分支是联合类型 string | number | boolean
        return input + input;
    } else {
        console.log(input);
        if (typeof input === 'number') {    // 这个分支是联合类型 number | boolean
            return input * 2;
        } else {
            return !input;  // 这个分支是boolean
        }
    }
}



/* instanceof 类型保护 */
// TS会在编译阶段检查instanceof类型保护
class Animal { 
    name: string
}
class Cat extends Animal {
    tailLength: number
}
function printName(animal: Animal) {
    if (animal instanceof Cat) {    // 这个分支判断是Animal
        console.log(animal.tailLength); // 这个分支里面是Cat
    } else {
        console.log(animal.name);   // 这个分支里面是Animal
    }
}


/* null 类型保护 */
// TS是通过关键字判断分支中的变量类型
// 如果tsconfig.json中的strictNullChecks为true，这个方法会报错，因(s)是null没有string方法
function getFirstLetter_5203(s: string | null) {
    return s.charAt(0);
}

// 所以需要判断s是否为null
// 第一种方法
function getFirstLetter_5204(s: string | null) {
    if (s === 'null') {
        return ''
    }
    return s.charAt(0);
}

// 第二种方法
function getFirstLetter_5205(s: string | null) {
    s = s || '';
    return s.charAt(0);
}

// 特例场景
function getFirstLetter_5206(s: string | null) {
    function append(input: string) {
        return s!.trim() + input    // 新版本这个分支是string，旧版本采用!语法来排除null
    }
    s = s || '';
    append(s)
    return s.charAt(0);
}



/* 可辨识联合 */
interface TipOption {
    type: 'tip' // 可辨识的属性
    text: string
}
interface AlertOption {
    type: 'alert'   // 可辨识的属性
    success(): void
}
interface ConfirmOption {
    type: 'confirm' // 可辨识的属性
    success(): void
    failure(): void
}

type Option = TipOption | AlertOption | ConfirmOption   // 联合，所以是可辨识联合
function show(option: Option) {
    if (option.type === 'tip') {
        console.log(option.text);
    } else if (option.type === 'alert') {
        console.log(option.success());
    } else {
        console.log(option.failure());
    }
}