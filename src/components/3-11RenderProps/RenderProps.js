import React, { Component } from 'react'
import MouablePanel from './MouablePanel'
import ShowMousePoint from './ShowMousePoint'
import Test from './Test'
import WithTest from './withTest'
export default class RenderProps extends Component {
    render() {
        return (
            <div>
                <MouablePanel></MouablePanel>
                <ShowMousePoint></ShowMousePoint>
                <hr/>
                <Test></Test>
                <hr/>
                <WithTest></WithTest>
            </div>
        )
    }
}
