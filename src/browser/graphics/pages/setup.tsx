import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { GraphicsApp } from '../GraphicsApp';
import { RunDataLabel } from '../components/RunDataLabel';
import { RunParticipants } from '../components/RunParticipants';
import { EstimateTime } from '../components/EstimateTime';

const RunDataArea = styled.div`
  position: absolute;
  top: 856px;
  left: 144px;
  width: 382px;
  height: 134px;
  padding: 8px 16px;
`;

const PlayerArea = styled.div`
  position: absolute;
  top: 856px;
  left: 754px;
  width: 382px;
  height: 134px;
  padding: 8px 16px;
`;

const EstimateArea = styled.div`
  position: absolute;
  top: 856px;
  left: 1364px;
  width: 382px;
  height: 134px;
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
      </GraphicsApp>
    </React.Fragment>  
  );
}

ReactDOM.render(<App />, document.getElementById('root'));