import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { RunDataActiveRunSurrounding, RunDataArray, SpeedcontrolInstance, SpeedcontrolReplicantName, Timer } from '../../../nodecg/speedcontrol';
import clone from 'lodash.clone';

export const SpeedcontrolContext = createContext<{
  runDataArray: RunDataArray;
  timer: Timer|null;
  runDataActiveRunSurrounding: RunDataActiveRunSurrounding|null;
}>({
  runDataArray: [],
  timer: null,
  runDataActiveRunSurrounding: null,
});

type Props = {
  children: ReactNode;
};

export const SpeedcontrolProvider = ({ children }: Props) => {

  const [ runDataArray, setRunDataArray ] = useState<RunDataArray>([]);
  const [ timer, setTimer ] = useState<Timer|null>(null);
  const [ runDataActiveRunSurrounding, setRunDataActiveRunSurrounding ] = useState<RunDataActiveRunSurrounding|null>(null);
  
  useEffect(() => {
    
    const mutations: Array<[SpeedcontrolReplicantName, React.Dispatch<any>]> = [
      ['runDataArray', setRunDataArray],
      ['timer', setTimer],
      ['runDataActiveRunSurrounding', setRunDataActiveRunSurrounding],
    ];

    mutations.forEach(([name, mutator]) => {
      const replicant = (nodecg as SpeedcontrolInstance).Replicant(name, 'nodecg-speedcontrol');
    
      replicant.on('change', (newVal) => {
        mutator(clone(newVal));
      });
    });
  }, []);
  
  return (
    <SpeedcontrolContext.Provider value={{
      runDataArray,
      timer,
      runDataActiveRunSurrounding,
    }}>
      { children }
    </SpeedcontrolContext.Provider>
  )
}