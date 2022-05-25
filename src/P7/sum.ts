export default function sum(a: number, b: number): number {
    // 保留12位小数，并转化为浮点数
    return parseFloat((a + b).toPrecision(12));
}