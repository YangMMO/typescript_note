type Handler_3407 = (data?: any) => void;

class EventEmitter_3407 {
    listeners: {
        [eventName: string]: Handler_3407[]
    }
    addEventListener(eventName: string, handler: Handler_3407) {
        this.listeners[eventName].push(handler)
    }   // 创建事件
    removeEventListener(eventName: string, handler: Handler_3407) {

    } // 删除事件
    emit(eventName: string, data?: any) { } // 触发事件
}

const eventEmitter_3407 = new EventEmitter_3407();
eventEmitter_3407.addEventListener('customClick', () => {
    console.log('custom clicked');
})
console.log(eventEmitter_3407)

