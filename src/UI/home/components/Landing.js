import React from 'react';
import styled from 'styled-components';
import Button from '../../general/components/Button';
import Gridcontainer from '../../general/components/Gridcontainer';
import H1 from '../../general/components/H1';
import P from '../../general/components/P';
import H3 from '../../general/components/H3';
import Spacer, { SpacerSize } from '../../general/components/Spacer';
import PointCloud from './PointCloud';
import GridOverlay from '../../general/components/GridOverlay';

const StyledLandingContainer = styled.div`
  height: 100vh;
  min-height: 600px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export default function Landing() {
  return (
    <section>
      <Gridcontainer>
        <StyledLandingContainer>
          <div>
            <H3>Hi I'm</H3>
            <H1>Jerome De Wulf</H1>
            <P>I build digital solutions.</P>
            <P>#codedogsandguitar</P>
            <Spacer size={SpacerSize.medium}></Spacer>
            <Button
              text="Get in touch"
              onButtonClick={() => {
                console.log('clicked');
              }}
            ></Button>
          </div>
          <PointCloud></PointCloud>
        </StyledLandingContainer>
        <GridOverlay></GridOverlay>
      </Gridcontainer>
    </section>
  );
}
