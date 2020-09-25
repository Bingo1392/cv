import React, { useEffect, createRef } from "react"
import { PlaceholderWrapper } from "./Placeholder.styles";
import lottie from 'lottie-web';
import animation from '../../animations/build_product_animation.json';

const Placeholder = () => {
  let animationContainer = createRef();

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animation
    })
    return () => anim.destroy();
  }, []);

  return (
    <PlaceholderWrapper>
      <div>
        <div style={{ maxWidth: '400px' }} ref={animationContainer} />
      </div>
      <h1>Pracuji na tom...</h1>
    </PlaceholderWrapper>
  )
}

export default Placeholder;
