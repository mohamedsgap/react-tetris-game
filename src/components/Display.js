import React from 'react';
import { DisplayStyling } from './DisplayStyling';

const Display = ({ gameOver, text }) => (
  <DisplayStyling gameOver={gameOver}>{text}</DisplayStyling>
)

export default Display;