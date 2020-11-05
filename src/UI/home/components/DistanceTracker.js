import React from 'react';
import styled from 'styled-components';
import GeneralStyles from '../../../assets/styles/general-styles';
import Gridcontainer from '../../general/components/Gridcontainer';
import GridOverlay from '../../general/components/GridOverlay';
import Spacer, { SpacerSize } from '../../general/components/Spacer';
import H3 from '../../general/components/H3';
import P from '../../general/components/P';
import Watch from '../../general/components/Watch';
import DistanceTrackerApp from './DistanceTrackerApp';

const StyledSection = styled.section`
  background-color: ${GeneralStyles.colors.blue.dark};
  position: relative;
  z-index: 0;
`;

const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const StyledWatchColumn = styled.div`
  width: 40%;
`;

const StyledTextColumn = styled.div`
  width: 60%;
`;

export default function DistanceTracker() {
  return (
    <StyledSection>
      <Gridcontainer>
        <Spacer size={GeneralStyles.padding.huge}></Spacer>
        <StyledRow>
          <StyledWatchColumn>
            <Watch>
              <DistanceTrackerApp></DistanceTrackerApp>
            </Watch>
          </StyledWatchColumn>
          <StyledTextColumn>
            <H3 darkBackground>Distance tracker</H3>
            <Spacer size={SpacerSize.small}></Spacer>
            <P darkBackground>
              When the smartwatch app I used to measure distance to the pin
            </P>
            <P darkBackground>
              on the golf course became pay to use, I decided to create
            </P>
            <P darkBackground>
              my own app. It uses location tracking to calculate the distance to
            </P>
            <P darkBackground>set points on my home golf course.</P>
            <Spacer size={SpacerSize.small}></Spacer>
            <P darkBackground>#tizen#vanillajavascript</P>
          </StyledTextColumn>
        </StyledRow>
        <Spacer size={GeneralStyles.padding.huge}></Spacer>
        <GridOverlay darkBackground={true}></GridOverlay>
      </Gridcontainer>
    </StyledSection>
  );
}
