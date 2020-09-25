import React, { useEffect, createRef, useState } from "react"
import { AnimationWrapper, Border, PlaceholderWrapper } from "./Placeholder.styles"
import lottie from 'lottie-web';
import animation from '../../animations/build_product_animation.json';

const Placeholder = () => {
  let animationContainer = createRef();
  const [change, toggleChange] = useState(false);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animation
    })
    setTimeout(() => {
      toggleChange(!change);
    }, 20);
    return () => anim.destroy();
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
