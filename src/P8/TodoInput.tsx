import * as React from 'react'; // 必须使用 * as 引入

//定义类型
interface TodoInputProps {
    color: string;
}

interface TodoInputState {
    value: string;
}

export default class TodoInput extends React.Component<TodoInputProps, TodoInputState> {
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