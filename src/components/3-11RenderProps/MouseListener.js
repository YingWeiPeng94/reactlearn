
import React, { PureComponent } from 'react'
import "./style.css"
/**
 * 该组件用于监听鼠标的变化
 */
export default class RenderProps extends PureComponent {
    state = {
        x:0,
        y:0
    }
    divRef = React.createRef()
    handleMouseMove = e => {
        const {left, top} = this.divRef.current.getBoundingClientRect()
        const x = e.clientX - left;
        const y = e.clientY - top;
        this.setState({
            x,
            y
        })
    }
    render() {
        return (
            <div ref={this.divRef} className="point" onMouseMove={this.handleMouseMove}>
                {this.props.render?this.props.render(this.state):"默认值"}
            </div>
        )
    }
}
