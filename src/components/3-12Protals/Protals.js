import React from 'react'
import ReactDOM from 'react-dom'
// 如果想在逻辑上把A作为子组件反正该protals里面，
// 但是在真实的dom结构里不是这种结构

// 注意事件冒泡
// 1，React中的事件是包装过的
// 2，它的事件冒泡是根据虚拟DOM树来的，与真实的DOM树无关



function ChildA() {// 把A渲染到modal中
    return ReactDOM.createPortal( <div className="child-a">
    <h1>ChildA</h1>
    <ChildB></ChildB>
    </div>,document.querySelector(".modal"))
}
// function ChildA() {
//     return <div className="child-a">
//         <ChildB></ChildB>
//     </div>
// }
function ChildB() {
    return <div className="child-b">
        <h1>ChildB</h1>
    </div>
}
export default function Protals() {
    return (
        <div>
            <ChildA></ChildA>
        </div>
    )
}
