module.exports = {
    "parser": "@typescript-eslint/parser",
    "plugins": ["@typescript-eslint"],
    rules: {
        'no-var': 'error',  //即开启var检测，默认关闭，off关闭
        '@typescript-eslint/indent': ["error", 4], //typescript-eslint的强制使用4个空格缩进
    }
}

// module.exports = {
//   extends: [
//     'alloy',
//     'alloy/typescript',
//   ],
//   env: {
//     // Your environments (which contains several predefined global variables)
//     //
//     // browser: true,
//     // node: true,
//     // mocha: true,
//     // jest: true,
//     // jquery: true
//   },
//   globals: {
//     // Your global variables (setting to false means it's not allowed to be reassigned)
//     //
//     // myGlobal: false
//   },
//   rules: {
//     // Customize your rules
//   },
// };