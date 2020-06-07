import React, { Component } from 'react'

export default class AddTask extends Component {
    state={
        name:""
    }
    render() {
        console.log('AddTask render')
        return (
            <div>
                <input 
                    type="text"
                    value={this.state.name}
                    onChange={e => {
                        this.setState({
                            name:e.target.value
                        })
                }}></input>
                <button onClick={()=>{
                    this.props.onAdd && this.props.onAdd({
                        name: this.state.name,
                        isFinish: false
                    })
                }} >添加任务</button>
            </div>
        )
    }
}
