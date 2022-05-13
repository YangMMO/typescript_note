import Phone from "./Phone";

// 添加手机壳
export default function addCase(P: typeof Phone) {
    return class extends P {
        getPrice() {
            return super.getPrice() + 100;
        }
    }
}