import React, { PureComponent } from 'react'

export default class ErrorBound extends PureComponent {
    state ={
        hasError: false
    }
    static getDerivedStateFromError(error){//参数为错误对象
        console.log('发生错误')
        return {
            hasError:true
        }
    }
    componentDidCatch(){
        console.log('记录错误信息')
    }
    render() {
        if (this.state.hasError) {
            // 开发环境中会一闪而过
            return <h1>出现错误了</h1>
        }
        return  this.props.children
    }
}
