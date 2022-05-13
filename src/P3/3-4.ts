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


/* 单例模式 */
class DiaLog_3403 {
    private static instance: DiaLog = null;
    static getInstance() {
        if (this.instance === null) {
            this.instance = new DiaLog();
        }
        return this.instance;
    }
    // 仅允许通过 Dialog.getInstance() 获取全局唯一实例
    private constructor() {}
}

const a_3403 = new DiaLog_3403; // 报错，创建一个实例
const b_3403 = new DiaLog_3403; // 报错，只能获取一个实例

const c_3403 = DiaLog_3403.getInstance();
const d_3403 = DiaLog_3403.getInstance();

console.log(c_3403 === d_3403); // true


/* 适配器模式 */
// 业务改造前的接口
import Api from "./3-4/Api";
import getInfo from "./3-4/getInfo";


let api = new Api();
getInfo(api);

// 业务改造后为newApi
import NewApi from "./3-4/NewApi";
import NewApiAdapter from "./3-4/NewApAdapter";

let newApi = new NewApi();

getInfo(newApi);// 报错，因api与NewApi接口不一致，此时需要适配器

// 增加适配器
let apiAdapter = new NewApiAdapter(newApi);
getInfo(apiAdapter); //通过 因为NewApiAdapter 继承API

// ------------
// 正确最终的写法
// import Api_3405 from "./3-4_Api"; // 不需要原api了
import getInfo_3405 from "./3-4/getInfo";   // 封装函数无需改变
import NewApi_3405 from "./3-4/NewApi";
import NewApiAdapter_3405 from "./3-4/NewApAdapter";

let newApi_3405 = new NewApi_3405();
let apiAdapter_3405 = new NewApiAdapter(newApi);
getInfo(apiAdapter_3405);


/* 装饰器模式 */
import Phone_3406 from "./3-4/Phone";
let p_3406 = new Phone_3406();
console.log(p_3406.getPrice()); // 1100


/* 观察者模式 */
type Handler1 = (data?: any) => void;
type Handler2 = (...args: any) => void;


class EventEmitter {
    listeners: {
        [eventName: string]: Handler1[] | Handler2[]
    }
    constructor() {
        this.listeners = {} // 首次需创建一个空对象
    }

    // 创建事件
    addListener(eventName: string, handler: Handler1 | Handler2) {
        if (!(eventName in this.listeners)) {
            this.listeners[eventName] = []
        }
        this.listeners[eventName].push(handler)

        return this //  返回this链式调用
    }

    // 删除事件
    removeListener(eventName: string, handler: Handler1 | Handler2) {
        if (!(eventName in this.listeners)) {
            console.warn(`不存在 ${eventName} 方法`)
            return
        }
        //因为判断得出Boolean，但[eventName]必须是Handler类，所以直接从[eventName]移除掉了remove值
        this.listeners[eventName] = this.listeners[eventName].filter(
            (item) => item !== handler
        );
        return this
    }

    // 触发事件
    emit(eventName: string, ...args: any) {
        if (!(eventName in this.listeners)) {
            console.log(`不存在 ${eventName} 方法`)
            return
        }

        this.listeners[eventName].forEach((handler) => {
            handler(...args)
        })

        return this
    }

    emit1(eventName: string, data: string) {
        const handlerArgs = Array.prototype.slice.call(arguments, 1);
        // console.log('h', Array.prototype.slice.call(arguments, 0))
        if (!(eventName in this.listeners)) {
            console.log(`不存在 ${eventName} 方法`)
            return
        }

        this.listeners[eventName].forEach((handler) => {
            handler(...handlerArgs)
        })

        return this
    }
}

let a_num = 10
let b_num = 20

let listenerFun_2 = (value: string, num: number) => {
    console.log(`custom clicked 2: ${value} , ${num}`);
}

let listenerFun_4 = () => {
    console.log(`custom clicked 4: remove`);
}

let listenerFun_5 = (value: string) => {
    console.log(`custom clicked 5: ${value}`);
}


const eventEmitter = new EventEmitter();
eventEmitter.addListener('custom', (value: string) => {
    console.log(`custom clicked 1: ${value}`);
})

eventEmitter.addListener('custom', listenerFun_2)

eventEmitter.addListener('custom', () => {
    console.log(`custom clicked 3: null`);
})

eventEmitter.addListener('custom', listenerFun_5)

eventEmitter.emit('custom', a_num, b_num)   //...args传参，每次使用‘custom’，都会运行该名称数组下的所有函数

eventEmitter.emit1('custom', '123') //  不同的触发方式，只有传参的差别

eventEmitter.removeListener('custom', listenerFun_2);
