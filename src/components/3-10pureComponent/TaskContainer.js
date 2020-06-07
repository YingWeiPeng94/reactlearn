import React, { Component } from 'react'
import TaskList from './TaskList'
import AddTask from './AddTask'
/**
 * 组件树结构   
 * App---render1次
 * TaskContainer---render两次
 *  TaskList---render两次
 * Task*10---render十次
目前按这样的结构渲染没什么问题
 */
/**
 * TaskList同级上加AddTask后
 * 第一次执行时：
 *      AddTask----render两次-----没必要只要一次就行
 * 添加任务时：
 *      TaskLisk----render11次-------没必要只有添加了的那个渲染就行
 * 
 */



export default class TaskContainer extends Component {
    state = {
        tasks:[]
    }
    componentDidMount(){
        const ts = [];
        for(let i = 1; i<=10;i++){
            ts.push({
                name:`任务${i}`,
                isFinish:Math.random() > 0.5
            })
        }
        this.setState({
            tasks:ts
        })
    }
    handleAdd = newTask =>{
        this.setState({
            tasks:[...this.state.tasks, newTask]
        })
    }
    render() {
        console.log("taskContainer Render，数组长度:"+this.state.tasks.length)
        return (
            <div>
                <AddTask onAdd={this.handleAdd}></AddTask>
                <TaskList tasks = {this.state.tasks}></TaskList>
            </div>
        )
    }
}
