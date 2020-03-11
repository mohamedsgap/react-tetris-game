import React, { useState } from 'react'
import Display from './Display'
import Stage from './Stage'
import StartBtn from './StartBtn'
import { TetrisWrapperStyling, TetrisStyling } from './TetrisStyling';
import { useStage } from '../game-hooks/useStage'
import { usePlayer } from '../game-hooks/usePlayer'

const Tetris = () => {
  const [dropTime, setDropTime] = useState(null)
  const [gameOver, setGameOver] = useState(false)
  const [player] = usePlayer()
  //const [stage, setStage] = useStage(player)
  const [stage, setStage] = useStage(player)

  return (
    <TetrisWrapperStyling>
     <h1 className="gameTitle"><span role="img" aria-label="tetris-emoji">🧩</span>React Tetris Game<span role="img" aria-label="tetris-emoji">🧩</span></h1>
      <TetrisStyling>
        <Stage stage={stage} />
        <aside>
          { gameOver ? (
            <Display gameOver={gameOver} text="Game Over" />

          ): (
          <div>
            <Display text="Score" />
            <Display text="Rows" />
            <Display text="Level" />
          </div>
          )}
          <StartBtn />
        </aside>
      </TetrisStyling>
    </TetrisWrapperStyling>
  );
};

export default Tetris;
