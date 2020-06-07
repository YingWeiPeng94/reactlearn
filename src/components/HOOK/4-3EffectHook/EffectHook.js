/**
 * EffectHook：用于在函数组件中处理副作用
 * 副作用：如果一个函数组件没有副作用，那么这个函数称为纯函数
 * react推荐一个组件不要带副作用
 * 1，ajax请求
 * 2，计时器
 * 3，或者其他异步操作
 * 4，更改真实的DOM对象
 * 5，本地存储
 * 6，其他对外部产生影响的操作
 * 函数：useEffect，该函数接受一个函数作为参数，该函数就是需要进行副作用操作的函数
 */
/** 细节：
 * 1.副作用函数的运行时间点，是在页面完成真实的UI渲染之后，因此它的
 * 执行是异步的，不会阻塞浏览器
 *   1，与类组件中的componentDidMount和componentDidUpdated的区别
 *   2，componentDidMount和componentDidUpdated，更改了真实的DOM，但是用户还没看到UI更新
 *   3，useEffect中的副作用更改了真实的DOM,用户已经看到了UI更新
 * 2，每个函数组件中，可以多次使用，但是不要放在判断或者循环代码块中
 * 3，useEffect中的副作用函数，可以有返回值，返回值必须是一个函数或者返回undefined，该函数叫做清理函数
 *    1，该函数运行时间点，在每次运行副作用函数之前
 *    2，首次渲染组件不运行
 *    3，该函数组件被销毁时一定会运行
 * （运行过程组件渲染，副作用函数，清理函数）
 * 4，useEffect函数可以传递第二个参数
 *    1，第二个参数是一个数组
 *    2，数组中记录该副作用的依赖数据
 *    3，当组件重新渲染后，只有依赖数据与上一次不一样时，才会执行副作用
 *    4，所以，当传递了依赖数据之后，如果数据没有发生变化
 *      1，副作用函数仅在第一次渲染后运行
 *      2，清理函数仅在组件卸载时运行
 * 5，副作用函数中，如果使用了函数上下文中的变量，则由于闭包的影响，会导致副作用函数中的变量不会实时变化
 * 6，副作用函数在每次注册时，会覆盖掉之前的副作用函数，因此，尽量保持副作用函数的稳定，否则控制起来会比较复杂
*/  
import React, { useState, useEffect } from "react";

export default function EffectHook() {
  const [n, setN] = useState(0);
//   document.title = `计数器${n}`;//此代码为副作用代码
  useEffect(() => {
      console.log("改变页面标题的副作用操作")
      document.title = `计数器：${n}`
  })
  useEffect(() => {
      console.log('其他副作用')

  })
  return (
    <div>
    <span>{n}</span>
      <button
        onClick={() => {
          setN(n + 1);
        }}
      >++</button>
    </div>
  );
}
