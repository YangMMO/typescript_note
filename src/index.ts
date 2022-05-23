interface String {
    prepenHello(): string;
}

String.prototype.prepenHello = function (): string {
    return 'Hello, ' + this;
}

'foo'.prepenHello() // 报错, 因为没有对应的类型声明
