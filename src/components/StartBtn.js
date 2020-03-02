

import React from 'react';
import { StartBtnStyling } from './StartBtnStyling';

const StartBtn = ({ callback }) => (
  <StartBtnStyling onClick={callback}>Start Game</StartBtnStyling>
)

export default StartBtn;