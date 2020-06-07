import MouseListener from "./MouseListener"
import React from 'react'
const renderPoint = mouse=><>横坐标：{parseInt(mouse.x)},纵坐标：{parseInt(mouse.y)}</>
const renderDiv = mouse=><>
                <div style={{
                width:100,
                height:100,
                background:"#008c8c",
                position:"absolute",
                left:mouse.x - 50,
                top:mouse.y - 50
                }}>
                </div>
                </>
export default function Test(){
    return (
        <div>

            通常该属性的名字叫做render，但不必须是render
            <MouseListener render={renderPoint}/>
            <MouseListener render={renderDiv}/>
        </div>
    )
}
// 以下为不纯组件，写法有效率问题
            // <MouseListener>
            //     {/* {mouse=><>横坐标：{parseInt(mouse.x)},纵坐标：{parseInt(mouse.y)}</>} 效率低*/}
            //    render = {renderPoint}
            // </MouseListener>
            // <MouseListener>
            //     {/* {mouse=><>
            //         <div style={{
            //         width:100,
            //         height:100,
            //         background:"#008c8c",
            //         position:"absolute",
            //         left:mouse.x - 50,
            //         top:mouse.y - 50
            //         }}>
            //     </div>
            //     </>} */}
            //     render = {renderDiv}
            // </MouseListener>