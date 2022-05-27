/* P8 */
// 用Typescript 写 React

/* 用Typescript 写 React */
// 将文件格式改为.tsx

// 此处是引用示例
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import TodoInput from './TodoInput'

ReactDOM.render((
    <TodoInput
        color="red"
    />
), document.getElementById('app'))
