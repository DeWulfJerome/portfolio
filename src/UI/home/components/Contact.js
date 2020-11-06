import React from 'react';
import styled from 'styled-components';
import GeneralStyles from '../../../assets/styles/general-styles';
import GridContainer from '../../general/components/Gridcontainer';
import GridOverlay from '../../general/components/GridOverlay';
import H4 from '../../general/components/H4';
import P from '../../general/components/P';
import { ReactComponent as FacebookLogo } from '../../../assets/media/facebook.svg';
import { ReactComponent as LinkedinLogo } from '../../../assets/media/linkedin.svg';
import { ReactComponent as InstagramLogo } from '../../../assets/media/instagram.svg';
import Spacer, { SpacerSize } from '../../general/components/Spacer';

const PaddedContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 0;
`;

const StyledBorder = styled.div`
  height: 1px;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  background: ${GeneralStyles.colors.blue.dark};
  opacity: 0.16;
`;

const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
`;

const StyledIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  &:nth-child(2) {
    padding: 0 4rem;
  }
`;

const StyledAnchor = styled.a`
  color: ${GeneralStyles.colors.blue.dark};
  text-decoration: none;
  h4 {
    transition: color 0.3s ease;
  }
  &:hover h4 {
    cursor: pointer;
    color: ${GeneralStyles.colors.blue.medium};
  }
`;

export default function Contact() {
  return (
    <section id="Contact">
      <GridContainer>
        <PaddedContainer>
          <H4>dewulf.jerome@gmail.com</H4>
          <P>Feel free to contact me if you have any questions!</P>
        </PaddedContainer>
        <StyledBorder></StyledBorder>
        <PaddedContainer>
          <H4>+32 476 07 56 71</H4>
          <P>Let's talk!</P>
        </PaddedContainer>
        <StyledBorder></StyledBorder>
        <PaddedContainer>
          <StyledRow>
            <StyledIconContainer>
              <FacebookLogo className="social-icon"></FacebookLogo>
              <StyledAnchor
                href="https://www.facebook.com/jerome.dewulf/"
                target="blank"
              >
                <H4>Facebook</H4>
              </StyledAnchor>
            </StyledIconContainer>
            <StyledIconContainer>
              <LinkedinLogo className="social-icon"></LinkedinLogo>
              <StyledAnchor
                href="https://www.linkedin.com/in/jerome-de-wulf-772919153/"
                target="blank"
              >
                <H4>LinkedIn</H4>
              </StyledAnchor>
            </StyledIconContainer>
            <StyledIconContainer>
              <InstagramLogo className="social-icon"></InstagramLogo>
              <StyledAnchor
                href="https://www.instagram.com/jerome.dewulf/"
                target="blank"
              >
                <H4>Instagram</H4>
              </StyledAnchor>
            </StyledIconContainer>
          </StyledRow>
        </PaddedContainer>
        <Spacer size={SpacerSize.huge}></Spacer>
        <GridOverlay></GridOverlay>
      </GridContainer>
    </section>
  );
}
