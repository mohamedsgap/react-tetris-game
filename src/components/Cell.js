import React from 'react';
import { CellStyling } from './CellStyling';
import { TETROMINOS } from '../utils/tetrominos';

const Cell = ({ type }) => (
  <CellStyling type={type} color={TETROMINOS[type].color} />
)

export default Cell;