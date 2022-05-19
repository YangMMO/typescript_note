/* P4 */
// 泛型

/* 泛型类 */
class Component_4401<T> {
    public props: T
    constructor(props: T) {
        this.props = props
    }
}

interface ButtonProps_4401 {
    color: string
}

let button_4401 = new Component_4401<ButtonProps_4401>({ color: 'red' })