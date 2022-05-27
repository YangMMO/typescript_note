/**
 * 
 * @param {number} a 
 * @param {bumber} br
 * @returns 
 */
export default function sum(a, b) {
    // 保留12位小数，并转化为浮点数
    return parseFloat((a + b).toPrecision(12));

    // 但如果我们在js中使用的是'12' string， 是无法识别错误的
    // return parseFloat((a + b).toPrecision('12'));
}