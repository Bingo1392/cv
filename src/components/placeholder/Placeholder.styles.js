import styled from 'styled-components'

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
`;

export const AnimationWrapper = styled.div`
  height: ${(props) => props.change ? '200px' : '0'};
  //width: ${(props) => props.change ? '230px' : '0'};
  transition: height 0.5s linear;
`;
