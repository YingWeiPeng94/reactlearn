import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';
import './Task.css'
// import { ObjectEqual } from './helper'
// class PureComponent extends Component{自己写，就这么简单
//     shouldComponentUpdate(nextProps, nextState){
//         console.log('Task是否需要重新渲染')
//         if(ObjectEqual(this.props, nextProps) && ObjectEqual(this.state, nextState)){
//             return false;
//         }
//         return true
//     }
// }

// 函数组件的纯组件写法
function Task(props) {
    console.log('Task render')
    return (
        <li className={props.isFinish ?"finish":""}>{props.name}</li>
    )
}
Task.propTypes = {
    name:PropTypes.string.isRequired,//任务名称
    isFinish:PropTypes.bool.isRequired//是否完成
}
// export default React.memo(Task);


// 函数组件自己写,memo实现原理
function memo(FuncComp) {
    return class Memo extends PureComponent {
        render() {
            return <>
                <FuncComp {...this.props}/>
            </>
        }
    }
}
export default memo(Task)






// 类组件写法
// export default class Task extends PureComponent {
//     static propTypes = {
//         name:PropTypes.string.isRequired,//任务名称
//         isFinish:PropTypes.bool.isRequired//是否完成
//     }
//     // 方案1自己手写优化
//     // shouldComponentUpdate(nextProps, nextState){
//     //     console.log('Task是否需要重新渲染')
//     //     if(ObjectEqual(this.props, nextProps) && ObjectEqual(this.state, nextState)){
//     //         return false;
//     //     }
//     //     return true
//     // }
//     // 方案二继承PureComponent
//     render() {
//         console.log('TaskRender')
//         return (
//             <div>
//                <li className={this.props.isFinish ?"finish":""}>{this.props.name}</li> 
//             </div>
//         )
//     }
// }
