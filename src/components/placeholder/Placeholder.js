import React, { useEffect, createRef, useState } from "react"
import { AnimationWrapper, Border, PlaceholderWrapper } from "./Placeholder.styles"
import lottie from 'lottie-web';
import animation from '../../animations/Chemical.json';

const Placeholder = () => {
  let animationContainer = createRef();
  const [change, toggleChange] = useState(false);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: 'svg',
      loop: false,
      autoplay: true,
      animationData: animation
    })
  }, []);

  return (
    <PlaceholderWrapper>
      <Border>
        <AnimationWrapper change={change} ref={animationContainer} />
      </Border>
      <h1>Pracuji na tom...</h1>
    </PlaceholderWrapper>
  )
}

export default Placeholder;
