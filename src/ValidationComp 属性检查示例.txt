import React, { Component } from 'react'
import PropTypes from "prop-types";
console.dir(PropTypes.number)//这是个函数
/**
 * 这个函数中有个属性isRequired也是个函数----必填
 */
export default class ValidationComp extends Component {
    static propTypes = {
        a:PropTypes.number.isRequired,
        //属性必须是一个数字类型，在类型检查的时候就会运行PropTypes.number.isRequired函数
        //原理就是通过一个函数来类型检查
    }
    render() {
        return (
            <div>
                a:{this.props.a}
            </div>
        )
    }
}
