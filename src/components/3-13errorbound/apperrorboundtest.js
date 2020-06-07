import React from 'react'
import ErrorBound from "./ErrorBound"
function Comp1(){
    return <div style={{
        width:"90%",
        height:500,
        border:"2px solid"
    }}>
        <h1>comp1</h1>
        <Comp2></Comp2>
    </div>
}
function getDatas() {
    return
}
function Comp2(){
    const datas = getDatas()
    const spans = datas.map(it => <span>某一项</span>)
    // 这个错误不会再生产环境下可见
    return <div style={{
        width:"70%",
        height:"70%",
        border:"2px solid"
    }}>
    {spans}
        <h1>comp2</h1>
        <Comp2></Comp2>
    </div>
}
function Comp3(){
    return <div style={{
        width:"90%",
        height:500,
        border:"2px solid"
    }}>
        <h1>comp3</h1>
    </div>
}
export default function errorbound() {
    return (
        <div>
        用一个错误边界组件包裹起来，这样组件报错了就不会往上级传播了
        <ErrorBound>
        <Comp1></Comp1>
        </ErrorBound>
           {/* <Comp1></Comp1> */}
           <Comp3></Comp3>
        </div>
    )
}
