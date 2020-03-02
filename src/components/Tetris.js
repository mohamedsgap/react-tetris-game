import React from 'react'
import Display from './Display'
import Stage from './Stage'
import StartBtn from './StartBtn'
import { buildStage } from '../utils/gameHelpers'
import { TetrisWrapperStyling, TetrisStyling } from './TetrisStyling';
const Tetris = () => {
  return (
    <TetrisWrapperStyling>
     <h1 className="gameTitle"><span role="img" aria-label="tetris-emoji">🧩</span>React Tetris Game<span role="img" aria-label="tetris-emoji">🧩</span></h1>
      <TetrisStyling>
        <Stage stage={buildStage()} />
        <aside>
          <div>
            <Display text="Score" />
            <Display text="Rows" />
            <Display text="Level" />
          </div>
          <StartBtn />
        </aside>
      </TetrisStyling>
    </TetrisWrapperStyling>
  );
};

export default Tetris;
