import React from 'react'
import { useState, useEffect } from 'react'

export default function Detail5() {
    const [n, setN] = useState(0)
    useEffect(()=>{
        setTimeout(() => {
        console.log(n);//n指向，当前APP函数调用时的n
        console.log('由于闭包的影响，会导致副作用函数中的变量不会实时变化')
        }, 5000);
    })
    return (
        <div>
            <h1>{}</h1>
            <button onClick={()=>{
                setN(n+1);
            }}>n+1</button>
        </div>
    )
}
