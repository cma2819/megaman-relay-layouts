import React, { useContext } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-rows: 36px 36px;
  align-content: space-between;  
`;

const FirstText = styled.div`
  align-self: start;
`;

const SecondText = styled.div`
  text-align: right;
  align-self: end;
  ${({small}: {small?: boolean}) => small ? 'font-size:33px;' : ''}
`;

type Props = {
  first: string;
  second: string;
  small?: boolean;
};

export const TwoRowText = ({ first, second, small }: Props) => {

  return (
    <Container>
      <FirstText>
        { first }
      </FirstText>
      <SecondText small={small}>
        { second }
      </SecondText>
    </Container>
  );
}