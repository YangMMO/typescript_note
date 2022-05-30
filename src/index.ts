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
const TodoItem: React.FunctionComponent<TodoItemProps> = ({ content }):any => {
    <li>
        { content }
    </li>
}

TodoItem

export default TodoItem