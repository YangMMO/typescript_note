/* P3 */
// 属性和方法
/* 在TS中对类的定义 */
class Cat_3101 {
    sayHello() {
        return 'Hello, ' + this.name;
    }
}
let tom = new Cat_3101();
tom.name = 'Tom';
console.log(tom.sayHello());
