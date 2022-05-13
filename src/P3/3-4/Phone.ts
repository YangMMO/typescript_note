// 原有的类
// export default class Phone_3406 {
//     getPrice() {
//         return 1000;
//     }
//     call() {
//         console.log('calling');
//     }
// }

// 使用装饰器，添加手机壳
import  addCase  from "./addCase";

@addCase
export default class Phone_3406 {   //报错 @语法是实验性功能，tsconfig的experimentalDecorators 为true
    getPrice() {
        return 1000;
    }
    call() {
        console.log('calling');
    }
}


