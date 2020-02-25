import React from 'react'
import Display from './Display'
import Stage from './Stage'
import StartBtn from './StartBtn'


const Tetris = () => {

    return (
    <div>
        <h1>Tetris game is in developing process!!!</h1>
        <Stage />
        <aside>
            <div>
                <Display text="Score"/>
                <Display text="Rows"/>
                <Display text="Levels"/>
            </div>
            <StartBtn />
        </aside>
    </div>
    )
}

export  default Tetris;