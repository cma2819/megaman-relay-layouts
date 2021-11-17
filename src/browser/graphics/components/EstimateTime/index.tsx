import React, { useContext } from 'react';
import { SpeedcontrolContext } from '../../providers/SpeedcontrolProvider';
import { TwoRowText } from '../TwoRowText';

export const EstimateTime = () => {

  const speedcontrol = useContext(SpeedcontrolContext);

  const currentRunId = speedcontrol.runDataActiveRunSurrounding?.current;
  const currentRun = speedcontrol.runDataArray.find((run,) => run.id === currentRunId);

  return (
    <TwoRowText first="EST" second={currentRun?.estimate || ''} />
  );
}