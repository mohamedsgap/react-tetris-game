import React from 'react';
import { StageStyling } from './StageStyling';
import Cell from './Cell';

const Stage = ({ stage }) => (
  <StageStyling width={stage[0].length} height={stage.length}>
    {stage.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]} />))}
  </StageStyling>
);

export default Stage;
