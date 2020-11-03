import React from 'react';
import styled from 'styled-components';

const StyledGrid = styled.div`
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
  position: relative;

  @media (max-width: 1200px) {
    width: 1000px;
  }

  @media (max-width: 1000px) {
    width: 768px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export default function Gridcontainer({ children }) {
  return <StyledGrid>{children}</StyledGrid>;
}
