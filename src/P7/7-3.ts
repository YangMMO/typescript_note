/* P7 */
// 代码检查

/* ESLint */
// npm install --save-dev eslint
// 根目录新建 .eslintrc.js 文件
// 可以在package.json scripts 中添加 eslint 命令, 如  "eslint": "eslint src --ext .ts", --ext代表匹配哪些规则文件

document.getElementById('button').addEventListener('click', async () => {
    let sum = await import(/* webpackChunckName: "sum" */ './sum')
    alert(sum.default(1, 2))
})

// 如果运行 npm run eslint 则会报错: 9:61  error  Parsing error: Assigning to rvalue
//  Parsing error代表使用的es的parser版本, 不是ts的parser
// 先安装 npm i --save-dev @typescript-eslint/eslint-plugin
// 然后.esintrc.js中添加 "parser": "@typescript-eslint/parser",
// 然后再次运行 npm run eslint 则报错：error  Unexpected var, use let or const instead  no-var （使用let 或 const）
// 可以通过eslint修复，在packsage.json scripts 中添加 "eslint:fix": "eslint src --ext .ts --fix"

// 值得注意的是，在.eslintrc.js中的"no-var": "error"，这个是eslint的规则，不是typescript的规则,所以还需要安装 npm i --save-dev @typescript-eslint/eslint-plugin
// 在.eslintrc.js中添加 "plugins": ["@typescript-eslint"],,

// 此处推荐使用AlloyTeam的规则: https://github.com/AlloyTeam/eslint-config-alloy
// 例如使用 npm install --save-dev eslint typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-config-alloy
// 然后将.eslintrc.js 替换成 推荐的规则



/* 与 vscode 集成 */
// 安装 vscode-typescript-plugin
