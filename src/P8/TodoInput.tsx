import * as React from 'react'; // 必须使用 * as 引入

//定义类型
interface TodoInputProps {
    color?: string;
}

interface TodoInputState {
    value: string;
}

export default class TodoInput extends React.Component<TodoInputProps, TodoInputState> {
    propTypes   // 用来限制传入的prop类型，缺点：仅支持部分类型，不能再编写时检查报错
    defaultProp // 用来定义prop参数

    static defaultProps: TodoInputProps = {
        color: 'blue'   //需将prop设置为可选属性
    }

    // 可以不在构造函数内写state
    public state = {
        value: ''
    }

    // public constructor(props) {
    //     super(props);
    //     this.state = {
    //         value: ''
    //     };
    // }
    
    private onhandleChange(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            value: e.target.value
        });
        console.log(e.target.value);
    }

    public render() {
        let foo = 1 as any //将number类型转换为any类型
        return (
            <input 
                style={{ color: this.props.color }}
                value={ this.state.value }
                onChange={ this.onhandleChange.bind(this) }
            />
        );
    }
}