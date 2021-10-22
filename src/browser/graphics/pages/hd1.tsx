import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { GraphicsApp } from '../GraphicsApp';
import { Logo } from '../components/Logo';
import { RunParticipants } from '../components/RunParticipants';
import { RunDataLabel } from '../components/RunDataLabel';
import { Timer } from '../components/Timer';

const LogoArea = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;
  height: 160px;
  width: 320px;
  filter: drop-shadow(0 0 8px #222222);
`;

const VideoArea = styled.div`
  position: absolute;
  top: 32px;
  left: 424px;
  width: 1464px;
  height: 824px;
  background-color: rgba(255, 255, 255, 0.6);
`;

const Participants = styled.div`
  position: absolute;
  top: 196px;
  left: 32px;
  width: 360px;
  height: 660px;
`;

const InfoArea = styled.div`
  position: absolute;
  top: 856px;
  left: 424px;
  width: 1464px;
  height: 158px;
  padding: 8px 8px;

  display: grid;
  grid-template-columns: auto auto;
`;

const InfoRow = styled.div``;

const App = () => {
  return (
    <React.Fragment>
      <GraphicsApp>
        <LogoArea>
          <Logo />
        </LogoArea>
        <VideoArea />
        <Participants>
          <RunParticipants />
        </Participants>
        <InfoArea>
          <InfoRow>
            <RunDataLabel />
          </InfoRow>
          <InfoRow>
            <Timer />
          </InfoRow>
        </InfoArea>
      </GraphicsApp>
    </React.Fragment>  
  );
}

ReactDOM.render(<App />, document.getElementById('root'));