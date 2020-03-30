import React from 'react'
/**
 * 函数组件默认值
 */
export default function FuncDefault(props) {
    return (
        <div>
            a:{props.a},b:{props.b},c:{props.c}
        </div>
    )
}
// 函数组件属性默认值
FuncDefault.defaultProps = {
    a:1,
    b:2,
    c:3
}
