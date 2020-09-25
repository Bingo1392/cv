import styled, { createGlobalStyle } from 'styled-components';
import { Colors, Sizes } from './common';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  // :root {
  //   font-size: ${Sizes.font};
  //   @media (min-width: 768px) {
  //     font-size: ${Sizes.font};
  //   }
  //   @media (min-width: 1024px) {
  //     font-size: ${Sizes.font};
  //   }
  // }
  body {
    //background-color: ${Colors.backgroundBody};
    background-color: darkgrey;
    font-family: "Bookman", serif;
    font-size: ${Sizes.font};
    color: ${Colors.standardFont};
  }
`;

export const MainContainer = styled.main`
  //background-color: ${Colors.backgroundCard};
`;
