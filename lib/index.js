class EventEmitter_3407 {
    addEventListener(eventName, handler) {
        this.listeners[eventName].push(handler);
    } // 创建事件
    removeEventListener(eventName, handler) {
    } // 删除事件
    emit(eventName, data) { } // 触发事件
}
const eventEmitter_3407 = new EventEmitter_3407();
eventEmitter_3407.addEventListener('customClick', () => {
    console.log('custom clicked');
});
console.log(eventEmitter_3407);
