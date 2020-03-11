import { useState } from 'react';
import { buildStage } from '../utils/gameHelpers'

export const useStage = () => {
  const [stage, setStage] = useState(buildStage());

  return [stage, setStage];
}