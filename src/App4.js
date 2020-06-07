import React from 'react'
import StateHook from './components/HOOK/4-2StateHook/StateHook'
import EffectHook from './components/HOOK/4-3EffectHook/EffectHook'
import MoveBlock from './components/HOOK/4-3EffectHook/Movable'
import MoveBlock2 from './components/HOOK/4-3EffectHook/Movable-2'
import Test from './components/HOOK/4-3EffectHook/test3'
import Detail5 from './components/HOOK/4-3EffectHook/detail5'

export default function App() {
    console.log("App Render")
    return (
        <div>
        <StateHook></StateHook>
        <EffectHook></EffectHook>
        {/* <MoveBlock></MoveBlock> */}
        <MoveBlock2></MoveBlock2>
        <Test></Test>
        <Detail5></Detail5>
        </div>
    )
}
