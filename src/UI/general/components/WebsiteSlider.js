import React from 'react';
import styled from 'styled-components';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup,
  Dot
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Browser from './Browser';
import H3 from './H3';
import P from './P';
import Button from './Button';
import Spacer, { SpacerSize } from './Spacer';

import pathfindingBrowser from '../../../assets/media/pathfindingBrowser.png';

export default function WebsiteSlider() {
  return (
    <div>
      <CarouselProvider
        className="carouselProvider"
        naturalSlideWidth={800}
        naturalSlideHeight={450}
        totalSlides={3}
      >
        <Slider className="carouselSlider">
          <Slide index={0}>
            <WebsiteSlide></WebsiteSlide>
          </Slide>
          <Slide index={1}>
            <WebsiteSlide></WebsiteSlide>
          </Slide>
          <Slide index={2}>
            <WebsiteSlide></WebsiteSlide>
          </Slide>
        </Slider>
        <DotGroup className="dotGroup"></DotGroup>
      </CarouselProvider>
    </div>
  );
}

const StyledCard = styled.div`
  background: radial-gradient(
    rgba(202, 198, 233, 0.81),
    rgba(255, 255, 255, 0.96)
  );
  border-radius: 40px;
  padding: 3rem;
  min-width: 350px;
`;

const StyledWebsiteSlide = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StyledBrowserContainer = styled.div`
  position: absolute;
  left: 350px;
  top: 70px;
  z-index: -1;
`;

const StyledBrowserImage = styled.img`
  height: 100%;
  width: auto;
`;

const WebsiteSlide = () => {
  return (
    <StyledWebsiteSlide>
      <div>
        <Spacer size={'22rem'}></Spacer>
        <StyledCard>
          <H3>Stephane Leroux</H3>
          <Spacer size={SpacerSize.small}></Spacer>
          <P>Website for a Belgian chocolate artist</P>
          <P>Design & Development @ Flux</P>
          <Spacer size={SpacerSize.small}></Spacer>
          <Button text="Go to site"></Button>
        </StyledCard>
      </div>
      <StyledBrowserContainer>
        <Browser small>
          <StyledBrowserImage src={pathfindingBrowser}></StyledBrowserImage>
        </Browser>
      </StyledBrowserContainer>
    </StyledWebsiteSlide>
  );
};
