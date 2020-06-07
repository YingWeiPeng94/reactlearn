import React, { Component } from './node_modules/react'
import {getAllStudents} from "../../../services/student"
import Index from "./index"
export default class App extends Component {
    state={
        datas:[
            {value:"football",text:"足球"},
            {value:"basketball",text:"篮球"},
            {value:"movie",text:"电影"},
        ],
        value:""
    }
    async componentDidMount() {
        const stus = await getAllStudents()
        this.setState({
            datas:stus.map(it=>({value:it.id.toString(), text:it.name}))
        })
    }
    render() {
        return (
            <div>
                    <Index
                    name="loves"
                    {...this.state}
                    onChange={value=>{
                        this.setState({
                            value:value
                        })
                    }
                }
                ></Index>
            </div>
        )
    }
}