import { useState } from 'react';
import { randomTetromino } from '../utils/tetrominos';

export const usePlayer = () => {
    const [player, setPlayer] = useState({
        pos: {x: 0, y:0},
        collided: false,
        tetromino: randomTetromino.shape(),
    })
    return [player]
}


