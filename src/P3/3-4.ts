/* P3 */
// 设计模式

/* 工厂模式 */
// 没有设计模式，如果以后增加有新增，都需要新的class
class CannedOrange_3401 {}

class CannedApple_3401 {}

function eatCan_3401(c: CannedOrange_3401 | CannedApple_3401) {
}
// 每次都要创建对应的，冗余
let o = new CannedOrange_3401();

eatCan_3401(o)

// 采用设计模式 工厂模式
// 先定义抽象类，然后继承抽象类
abstract class Can_3402 {}
class CannedOrange_3402 extends Can_3402 {}
class CannedApple_3402 extends Can_3402 {}

// 定义类型别名
type CanType_3402 = 'orange' | 'apple';

// 通过工厂模式，对传入的类型别名进行判断，然后返回对应的实例
class CanFactory_3402 {
    static create(type: CanType_3402) {
        if (type === 'orange') {
            return new CannedOrange_3402();
        } else if (type === 'apple') {
            return new CannedApple_3402();
        }
    }
}

// 工厂模式，使用示例
let p = CanFactory_3402.create('apple');
