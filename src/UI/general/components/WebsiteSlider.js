import React from 'react';
import styled from 'styled-components';
import { CarouselProvider, Slider, Slide, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Browser from './Browser';
import H3 from './H3';
import P from './P';
import Button from './Button';
import Spacer, { SpacerSize } from './Spacer';

import leroux from '../../../assets/media/leroux.jpg';
import makeawish from '../../../assets/media/makeawish.jpg';
import ugly from '../../../assets/media/ugly.jpg';

const websites = [
  {
    title: 'Stephane Leroux',
    content: [
      'Website for a Belgian chocolate artist',
      'Design & Development @ Flux'
    ],
    buttonText: 'Go to site',
    buttonUrl: 'https://fluxwebdesign3.be/customer/leroux/',
    browserImage: leroux
  },
  {
    title: 'Ugly',
    content: [
      'Website for an Antwerp base real estate agency',
      'Online booking of visits',
      'Custom integration with their ERP',
      'Design & Development @ Flux'
    ],
    buttonText: 'Go to site',
    buttonUrl: 'https://ugly.be',
    browserImage: ugly
  },
  {
    title: 'Make A Wish',
    content: [
      'Website for the Flandrian division of Make A Wish',
      'Webshop and custom donation module with Mollie',
      'Design & Development @ Flux'
    ],
    buttonText: 'Go to site',
    buttonUrl: 'https://makeawish.be/home',
    browserImage: makeawish
  }
];

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
          {websites.map((site, index) => {
            return (
              <Slide index={index}>
                <WebsiteSlide siteData={site}></WebsiteSlide>
              </Slide>
            );
          })}
        </Slider>
        <DotGroup className="dotGroup"></DotGroup>
      </CarouselProvider>
    </div>
  );
}

const StyledCard = styled.div`
  background: radial-gradient(
    farthest-corner at 100px 200px,
    rgba(202, 198, 233, 0.81) 22%,
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

const WebsiteSlide = ({ siteData }) => {
  return (
    <StyledWebsiteSlide>
      <div>
        <Spacer size={'22rem'}></Spacer>
        <StyledCard>
          <H3>{siteData.title}</H3>
          <Spacer size={SpacerSize.small}></Spacer>
          {siteData.content.map((line) => {
            return <P>{line}</P>;
          })}
          <Spacer size={SpacerSize.small}></Spacer>
          {siteData.buttonText && (
            <Button
              onButtonClick={() => {
                window.open(siteData.buttonUrl);
              }}
              text={siteData.buttonText}
            ></Button>
          )}
        </StyledCard>
      </div>
      <StyledBrowserContainer>
        <Browser small>
          <StyledBrowserImage src={siteData.browserImage}></StyledBrowserImage>
        </Browser>
      </StyledBrowserContainer>
    </StyledWebsiteSlide>
  );
};
