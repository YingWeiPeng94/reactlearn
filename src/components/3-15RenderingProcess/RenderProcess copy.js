import React, { PureComponent } from 'react'

class Comp1 extends React.Component {
    state = {}
    constructor(props) {
        super(props);
        console.log(4,"copy,Comp1 Constructor")
    }
    static getDerivedStateFromProps(props, state) {
        console.log(5,"copy,Comp1 getDerivedStateFromProps")
        return null
    }
//     将该组件的componentDidMount加入到执行队列（先进先出，先进先执行
//       真个虚拟DOM树全部构建完毕，并且将真实的DOM对象加入到容器中后，
// 执行该队列
    componentDidMount(){
        console.log('copy,Comp1,componentDidMount')
    }
    render() {
        console.log(6,"copy,Comp1 render")
        return (
            <div>
                <h1>Comp1</h1>
            </div>
        )
    }
}
export default class RenderProcess extends PureComponent {
    state = {}
    constructor(props) {
        super(props);
        console.log(1,"copy,App Constructor")
    }
    static getDerivedStateFromProps(props, state) {
        console.log(2,"copy,App getDerivedStateFromProps")
        return null
    }
    componentDidMount(){
        console.log('copy,App,componentDidMount')
    }
    render() {
        console.log(3,"copy,App render")
        return (
            <div>
                <Comp1></Comp1>
            </div>
        )
    }
}
