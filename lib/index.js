String.prototype.prepenHello = function () {
    return 'Hello, ' + this;
};
'foo'.prepenHello(); // 报错, 因为没有对应的类型声明
