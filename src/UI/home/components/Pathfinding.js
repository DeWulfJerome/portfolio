import React from 'react';
import styled from 'styled-components';
import Button from '../../general/components/Button';
import Gridcontainer from '../../general/components/Gridcontainer';
import GridOverlay from '../../general/components/GridOverlay';
import H3 from '../../general/components/H3';
import P from '../../general/components/P';
import SectionHeader from '../../general/components/SectionHeader';
import Spacer, { SpacerSize } from '../../general/components/Spacer';
import Phone from '../../general/components/Phone';
import Browser from '../../general/components/Browser';
import pathfindingPhone from '../../../assets/media/pathfindingPhone.png';
import pathfindingBrowser from '../../../assets/media/pathfindingBrowser.png';

const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  min-height: 600px;
`;

const StyledPhoneImage = styled.img`
  height: 100%;
  width: auto;
`;

const StyledBrowserImage = styled.img`
  height: 100%;
  width: auto;
`;

const StyledBrowserContainer = styled.div`
  position: absolute;
  top: 0;
  right: -450px;
  z-index: 9;
`;

const StyledPhoneContainer = styled.div`
  z-index: 10;
  position: relative;
`;

export default function Pathfinding() {
  return (
    <section id="Portfolio">
      <Gridcontainer>
        <SectionHeader>Portfolio</SectionHeader>
        <StyledRow>
          <div>
            <H3>Pathfinding visualizer</H3>
            <Spacer size={SpacerSize.medium}></Spacer>
            <P>An application I built to better understand how</P>
            <P>the most common pathfinding algorithms work.</P>
            <Spacer size={SpacerSize.small}></Spacer>
            <P>#react#styled-components</P>
            <Spacer size={SpacerSize.small}></Spacer>
            <p>github</p>
            <Spacer size={SpacerSize.small}></Spacer>
            <Button
              text="Check it out"
              onButtonClick={() => {
                window.open('https://pathfinding.jeromedewulf.be');
              }}
            ></Button>
          </div>
          <div>
            <StyledBrowserContainer>
              <Browser>
                <StyledBrowserImage
                  src={pathfindingBrowser}
                ></StyledBrowserImage>
              </Browser>
            </StyledBrowserContainer>
            <Spacer size={'25rem'}></Spacer>
            <StyledPhoneContainer>
              <Phone>
                <StyledPhoneImage src={pathfindingPhone}></StyledPhoneImage>
              </Phone>
            </StyledPhoneContainer>
          </div>
        </StyledRow>
        <GridOverlay></GridOverlay>
      </Gridcontainer>
    </section>
  );
}
