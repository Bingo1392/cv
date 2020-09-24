import styled from 'styled-components'
import { Sizes } from "../../styles/common"

export const PlaceholderContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PlaceholderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div {
    margin-bottom: ${Sizes.m};
    font-size: ${Sizes.xxl};
  }
`;
