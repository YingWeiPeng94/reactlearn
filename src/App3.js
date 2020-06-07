import React from 'react'
import TaskContainer from "./components/3-10pureComponent/TaskContainer"
import RenderProps from "./components/3-11RenderProps/RenderProps"
import Protals from "./components/3-12Protals/Protals"
import ErrorBound from "./components/3-13errorbound/apperrorboundtest"
import RenderProcess from "./components/3-15RenderingProcess/RenderProcess"
import RenderProcessCopy from "./components/3-15RenderingProcess/RenderProcess copy"
import LoginAndRegister from "./components/3-15RenderingProcess/LoginAndRegister"

export default function App() {
    console.log("App Render")
    return (
        <div>
            {/* <h1>3-10pureComponent纯组件</h1>
            <TaskContainer></TaskContainer>
            <hr/>
            <h1>3-11RenderProps</h1>
            <RenderProps></RenderProps>
            <hr/>
            <h1>3-12插槽Protals</h1>
            <Protals></Protals> */}
            {/* <h1>错误边界</h1> */}
            {/* <ErrorBound></ErrorBound> */}
            <hr/>
            <RenderProcess></RenderProcess>
            <RenderProcessCopy></RenderProcessCopy>
            <hr/>
            <hr/>
            <LoginAndRegister></LoginAndRegister>
        </div>
    )
}
