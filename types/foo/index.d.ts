// 这是无法引用的
interface String {
    prepenHello_6102(): string;
}
// 声明全局变量
declare global {
    interface String {
        prepenHello_6103(): string;
    }
}