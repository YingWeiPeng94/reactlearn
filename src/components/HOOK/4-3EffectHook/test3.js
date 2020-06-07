import React from 'react'
import { useState, useEffect } from 'react'

// 第三个参数

function Visible() {
useEffect(()=>{
    console.log('副作用函数仅挂载时运行一次')
    return ()=>{
        console.log('清理函数，仅卸载时运行一次')
    }
},[])//使用空数组作为依赖项，则副作用函数仅在挂载的时候运行
const [,forceUpdate] = useState({})
console.log('组件渲染')
    return (
        <h1>TEST组件<button onClick={()=>{
            forceUpdate({})
        }
        }>刷新组件</button></h1>
    )
}


export default function TestTest(){
    const [visible, setVisible] = useState(true)
    return (
        <div>
        {
            visible&&(
               <Visible></Visible>
            )
        }
        <button onClick={()=>{
            setVisible(!visible)
        }}>显示隐藏</button>    
        </div>
    )
}
