import React from 'react'
/**
 * 函数组件默认值
 */
export default class ClassDefault extends React.Component {
    static defaultProps = {//也可以写在这里
        b:2,
        c:3
    }
    constructor(props){
        super(props)
        console.log(props)//在构造函数中就已经混合
    }
    render() {
      return(
        <div>
            a:{this.props.a},b:{this.props.b},c:{this.props.c}
         </div>
      )
    }
}
// 类组件属性默认值
// ClassDefault.defaultProps = {
//     a:1,
//     b:2,
//     c:3
// }
