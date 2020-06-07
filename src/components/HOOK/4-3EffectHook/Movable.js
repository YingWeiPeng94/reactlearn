import React from 'react'
import { useState, useEffect } from 'react'


/**
 * 
 *  3，useEffect中的副作用函数，可以有返回值，返回值必须是一个函数，该函数叫做清理函数
 *    1，该函数运行时间点，在每次运行副作用函数之前
 *    2，首次渲染组件不运行
 *    3，该函数组件被销毁时一定会运行
 * （运行过程组件渲染，副作用函数，清理函数）
 */
const ref = React.createRef()
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
})
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
                        x: <input type="number" value={point.x} onChange={e=>{
                        setPoint({
                            ...point,
                            x:parseInt(e.target.value)
                        })
                    }     
                    } />
                    y: <input type="number" value = {point.y} onChange={e=>{
                        console.log(e.target.value)
                        setPoint({
                            ...point,
                            y:parseInt(e.target.value)
                        })
                    }}/>
                    <Movable left={point.x} top={point.y}></Movable>
                </div>
            )
        }

        
        <button onClick={()=>{
            setVisible(!visible)
        }}>显示隐藏</button>    
        </div>
    )
}
