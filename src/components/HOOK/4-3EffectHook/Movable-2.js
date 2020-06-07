import React from 'react'
import { useState, useEffect } from 'react'
const ref = React.createRef()
const txtX = React.createRef()
const txtY = React.createRef()
// 第三个参数
window.timer = null
function stop(){
    clearInterval(window.timer)
    window.timer = null
}
function Movable(props) {
useEffect(()=>{
    console.log('副作用函数')
    stop()
    const div = ref.current;
    let curTimes = 0;//当前移动的次数
    const disX = props.left/1000;
    const disY = props.top/1000;
    window.timer=setInterval(() => {
        curTimes++;
        const newLeft = curTimes * disX;
        const newTop = curTimes *disY;
        div.style.left = newLeft + "px";
        div.style.top = newTop + "px";
        if(curTimes === 1000){
            stop()
        } 
    }, 10);
    return ()=>{
        console.log('清理函数')
        stop()
    }
}, [props.left,props.top])
console.log('组件渲染')
    return (
        
        <div ref={ ref } style={{
            width:100,
            height:100,
            left:0,
            top:0,
            position:"fixed",
            background:"#f40"
            }}>
        </div>
    )
}
export default function MoveBlock(){
    const [point,setPoint] = useState({
        x:0,y:0
    })
    const [visible, setVisible] = useState(true)
    return (
        <div style={    
            {padding:'200px'}
        }>
        {
            visible&&(
                <div>
                        x: <input type="number" ref={txtX} />
                    y: <input type="number" ref={txtY}/>
                    <Movable left={point.x} top={point.y}></Movable>
                </div>
            )
        }

        <button onClick={()=>{
            setPoint({
               x:parseInt(txtX.current.value),
               y:parseInt(txtY.current.value)
            })
        }}>开始移动</button>
        <button onClick={()=>{
            setVisible(!visible)
        }}>显示隐藏</button>    
        </div>
    )
}
