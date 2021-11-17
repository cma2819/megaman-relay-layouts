import React, { useContext } from 'react';
import { RunData } from '../../../../nodecg/external/speedcontrol/RunData';
import { SpeedcontrolContext } from '../../providers/SpeedcontrolProvider';
import { TwoRowText } from '../TwoRowText';


export const RunParticipants = () => {

  const speedcontrol = useContext(SpeedcontrolContext);

  const currentRunId = speedcontrol.runDataActiveRunSurrounding?.current;
  const currentRun = speedcontrol.runDataArray.find((run,) => run.id === currentRunId);

  const playersFromRun = (run: RunData) => {
    return run.teams.flatMap(team => team.players);
  }

  return (
    <TwoRowText first="player" second={currentRun ? playersFromRun(currentRun).map(player => player.name).join('/') : ''} />
  );
}