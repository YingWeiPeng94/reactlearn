import React, { useState } from "react";
  /**
   *  useState,不填参数，默认值伪uundefined
   *  函数有一个参数，这个参数的值表示状态的默认值
   *  函数的返回值是一个数组，该数组一定包含两项
   *  第一项，当前状态的值
   *  第二项，改变状态的函数
   *
   * 一个函数组件中可以有多个状态，这种做法非常有利于横向切分关注点
   * 有利于每次只关注一个状态
   */
  // const arr = useState(0);
  // const n = arr[0];//得到状态的值
  // const setN = arr[1];//得到一个函数，该函数用于改变状态，
  /**
   * 原理：
   * 当运行一个函数组件时，调用useState函数
   * 函数组件渲染过程：组件节点App持有一个ReactElement对象，它持有一个函数的引用，这样就找到就可以找到对应的函数
   * 运行这个函数，调用useState
   * 检查该节点的状态表格，相当于数组
   * 第一次调用useState
   *  1，检查useState 2，检查该节点的状态数组，状态表格中无内容则使用默认值创建一个状态，将该状态加入到状态数组中,x下标为0
   * 第N次调用
   * 1，检查该节点的状态数组是否存在下标N，不存在则使用默认值创建一个转台，将该状态加入到状态数组中，下标为N
   * 存在，忽略掉默认值，直接得到状态值
   * 只要改变状态，则重新调用该函数
   * 
   */
  
export default function StateHook() {
  const [n, setN] = useState(0);
  const [visible, setVisible] = useState(true);
  return (
    <div>
      <div style={{ display: visible ? "block" : "none" }}>
        <button
          onClick={() => {
            setN(n - 1);
          }}
        >
          -
        </button>
        <span> {n} </span>
        <button
          onClick={() => {
            setN(n + 1);
          }}
        >
          +
        </button>
      </div>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        显示隐藏
      </button>
      <Test2></Test2>
      <Test3></Test3>
      <Test4></Test4>
      <Test5></Test5>
    </div>
  );
}
// 5，使用函数改变数据，传入的值不会和原来的数据进行合并，而是直接替换
function Test2(){
    console.log('test render')
    const [data, setData] = useState({
        x:1,
        y:2
    })
    return (
        <div>
            <p>x:{data.x},y:{data.y}</p>
            <button onClick={()=>{
                setData({
                    ...data,//解决办法：添加这行
                    x:data.x+1
                })
            }}>test2</button>
        </div>
    )

}
// 如果要实现强制刷新组件
// 6函数组件：可以使用一个空对象的useState
function Test3(){
    console.log('test3 强制刷新')
    const [, forceUpdate] = useState({ })
    return (
        <div>
            {/* <p>x:{data.x},y:{data.y}</p> */}
            <button onClick={()=>{
                    forceUpdate({})
            }}>test3强制刷新</button>
        </div>
    )

}

// 8，和类组件一样，函数组件改变状态可能是异步的（DOM事件中），多个
// 状态变化会合并并以提高效率，此时，不饿能信任之前的状态，而是应该使用
// 回调函数的方式改变状态。就是如果状态辩护要使用到之前的状态，尽量传递函数
 function Test4() {
  const [n, setN] = useState(0);
  return (
    <div>
      <div>
      <p>希望点击一次可以加或者减去两次，实际则合并了</p>
        <button
          onClick={() => {
            setN(n - 1);
            setN(n - 1);
          }}
        >
          -
        </button>
        <span> {n} </span>
        <button
          onClick={() => {
            setN(n + 1);
            setN(n + 1);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
// 解决方法
function Test5() {
  const [n, setN] = useState(0);
  return (
    <div>
      <div>
      <p>希解决办法</p>
        <button
          onClick={() => {
            setN(prevN => prevN - 1);
            setN(prevN => prevN - 1);
          }}
        >
          -
        </button>
        <span> {n} </span>
        <button
          onClick={() => {
            setN(prevN => prevN + 1);
            setN(prevN => prevN + 1);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}