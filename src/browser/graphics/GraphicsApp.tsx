import './common.css';

import React, { ReactNode } from 'react';
import { SpeedcontrolProvider } from './providers/SpeedcontrolProvider';

type Props = {
  children: ReactNode
};

export const GraphicsApp = ({ children }: Props) => {

  return (
    <SpeedcontrolProvider>
      { children }
    </SpeedcontrolProvider>
  );
}
