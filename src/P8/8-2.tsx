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



/* React 静态属性 */
// propTypes   // 用来限制传入的prop类型，缺点：仅支持部分类型，不能再编写时检查报错
// defaultProp // 用来定义prop参数
ReactDOM.render((
    <TodoInput/>
), document.getElementById('app'))



/* React 内置工具类型 */
import * as React from 'react'

interface TodoItemProps {
    content: string;
}

// 函数式写法
// export default function TodoItem(props: TodoItemProps) {
//     return (
//         <li>
//             { props.content }
//         </li>
//     )
// }

// 使用react内置工具类型 示例1 使用SFC ,但该API已弃用
// const TodoItem: React.SFC<TodoItemProps> = ({ content }) => {
//     <li>
//         { content }
//     </li>
// }

// 新版使用的是React.FunctionComponent
const TodoItem: React.FunctionComponent<TodoItemProps> = ({ content }): any => {
    <li>
        {content}
    </li>
}

TodoItem.defaultProps  // 定义后则可以使用内置defualtProps等属性和方法

export default TodoItem

// 例子2
import * as React from 'react'

// 定义样式，但没有准确的类型，添加属性没有代码提示
// 添加React.CSSProperties 则由代码提示
const todoItemStyle: React.CSSProperties = {
    color: 'red',
    fontSize: 16
}

interface TodoItemProps {
    content: string;
}

const TodoItem_8202: React.FunctionComponent<TodoItemProps> = ({ content }): any => {
    <li style={todoItemStyle}>
        {content}
    </li>
}

export default TodoItem_8202
