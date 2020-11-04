import React from 'react';
import GridContainer from '../components/Gridcontainer';
import Logo, { LogoSizes } from '../components/Logo';
import styled from 'styled-components';
import GeneralStyles from '../../../assets/styles/general-styles';

const StyledHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  position: absolute;
  z-index: 99;
  top: 0;
`;

const StyledMenuList = styled.ul`
  display: flex;
  flex-direction: row;
`;

export default function Header() {
  return (
    <header>
      <GridContainer>
        <StyledHeaderContainer>
          <Logo size={LogoSizes.medium}></Logo>
          <nav>
            <StyledMenuList>
              <MenuItem>Portfolio</MenuItem>
              <MenuItem>About</MenuItem>
              <MenuItem>Contact</MenuItem>
            </StyledMenuList>
          </nav>
        </StyledHeaderContainer>
      </GridContainer>
    </header>
  );
}

const StyledMenuItem = styled.li`
  display: block;
  margin: 0 2rem;
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
`;

const StyledMenuAnchor = styled.a`
  text-decoration: none;
  font-weight: bold;
  position: relative;
  margin: 0;
  color: ${GeneralStyles.colors.blue.dark};

  &:before,
  &:after {
    display: block;
    position: absolute;
    content: '';
    height: 5px;
    width: 5px;
    border-radius: 100%;
    background: linear-gradient(
      to right,
      ${GeneralStyles.colors.blue.medium},
      ${GeneralStyles.colors.blue.dark}
    );
    top: 50%;
    left: 0;
    opacity: 0;
    transition: all 0.2s ease;
    transform: translateY(-20%);
  }
  &:after {
    left: auto;
    right: 0;
  }

  &:hover:before {
    left: -10px;
    opacity: 1;
  }
  &:hover:after {
    right: -10px;
    opacity: 1;
  }
`;

const MenuItem = ({ children }) => {
  return (
    <StyledMenuItem>
      <StyledMenuAnchor href={'#' + children}>{children}</StyledMenuAnchor>
    </StyledMenuItem>
  );
};
