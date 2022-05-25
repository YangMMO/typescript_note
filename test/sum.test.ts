import sum from "../src/P7/sum";
import * as assert from "assert";   // 添加断言库，node自带

// 添加描述，用于描述测试用例
describe("sum", () => {
    // 填写测试用例，比如1+2是否等于3
    it('1+2=3', () => {
        // 使用断言库，断言1+2是否等于3
        assert.equal(sum(1, 2), 3);
    })
    it('0.1+0.2=0.3', () => {
        assert.equal(sum(0.1, 0.2), 0.3);
    })
});

// 在package.json  scripts 中添加 "test": "mocha test/sum.test.ts"
// 运行 npm run test
// 报错 Unknown file extension ".ts" for E:\w\typescr... 因为mocha默认支持js语法
// 需要修改为 "mocha --require ts-node/register  test/sum.test.ts" 添加ts-node解析器
// 另外需要按照ts-node进来 npm i ts-node --save-dev
// 还需检查tsconfig.json文件，是否为"module": "commonjs" }
// 运行 npm run test
// 成功 1 passing (5ms)

// 如果需要使用esnext语法，需要修改scrpits为TS_NODE_COMPILER_OPTIONS='{\"module\":\"commonjs\"}' mocha --require ts-node/register  test/sum.test.ts


// 如果觉得package.json test的文本太长，可以存放在独立文件中
// test下新建mocha.opts文件
// 将 test：mocha 后的  --require ts-node/register  test/sum.test.ts 复制进mocha.opts文件
// --watch 指定监视文件，当文件发生变化时，自动执行mocha.opts文件, 需要注意使用的TS来写测试用例，是不会有效果的
// 需要添加 --watch-extension=ts 指定监视的文件类型