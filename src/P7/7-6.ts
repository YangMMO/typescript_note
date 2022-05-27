/* P7 */
// 迁移

/* js 与 ts 共存 */
// 将ts 文件改为.js文件
// 在tsconfig.json中添加 "allowJs": true, // 允许使用js文件进行编译
// 如果跑 run test 会报错，因不支持.ts语法
// 但可以通过删除 :number 类型声明来拒绝，但是其他.ts的文件引用就会变any类型
// 解决方式如下，填写注释

/**
 * 
 * @param {number} a 
 * @param {bumber} b
 * @returns 
 */
export default function sum(a, b) {
    // 保留12位小数，并转化为浮点数
    return parseFloat((a + b).toPrecision(12));

    // 但如果我们在js中使用的是'12' string， 是无法识别错误的
    return parseFloat((a + b).toPrecision('12'));
}

// 所以我们可以使用tsconfig.json中的 "checkJs": true, // 检查js文件中的错误