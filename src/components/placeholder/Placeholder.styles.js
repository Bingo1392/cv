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
  width: 360px;
  h1 {
    margin-top: ${Sizes.m};
  }
`;

export const AnimationWrapper = styled.div`
  height: 200px;
  opacity: ${(props) => props.change ? 1 : 0};
  transition: opacity 1s ease;
`;

export const Border = styled.div`
  width: 360px;
  border: 2px solid black;
  border-radius: ${Sizes.m};
`;
