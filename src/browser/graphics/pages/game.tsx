import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { GraphicsApp } from '../GraphicsApp';
import { Timer } from '../components/Timer';
import { RunDataLabel } from '../components/RunDataLabel';
import { RunParticipants } from '../components/RunParticipants';
import { EstimateTime } from '../components/EstimateTime';

const RunDataArea = styled.div`
  position: absolute;
  top: 32px;
  left: 24px;
  width: 388px;
  height: 134px;
  padding: 8px 16px;
`;

const PlayerArea = styled.div`
  position: absolute;
  top: 232px;
  left: 24px;
  width: 388px;
  height: 134px;
  padding: 8px 16px;
`;

const EstimateArea = styled.div`
  position: absolute;
  top: 752px;
  left: 24px;
  width: 388px;
  height: 114px;
  padding: 8px 16px;
`;

const TimerArea = styled.div`
  position: absolute;
  top: 922px;
  left: 24px;
  width: 388px;
  height: 114px;
  padding: 8px 16px;
`;

const App = () => {
  return (
    <React.Fragment>
      <GraphicsApp>
        <RunDataArea>
          <RunDataLabel />
        </RunDataArea>
        <PlayerArea>
          <RunParticipants />
        </PlayerArea>
        <EstimateArea>
          <EstimateTime />
        </EstimateArea>
        <TimerArea>
          <Timer />
        </TimerArea>
      </GraphicsApp>
    </React.Fragment>  
  );
}

ReactDOM.render(<App />, document.getElementById('root'));