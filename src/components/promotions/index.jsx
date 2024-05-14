import { useState, useEffect, useRef } from 'react';
import { MessageContainer, MessageText, PromotionsContainer } from '../../styles/promotions';
import { messages } from './messages';
import { Slide } from '@mui/material';

function Promotions() {

  let [messageIndex, setMessageIndex] = useState(0);
  let [showMessage, setShowMessage] = useState(true);
  const containerRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      setShowMessage(false);
    }, 3000);

    const intervalId = setInterval(() => {
      // get next message
      setMessageIndex(i => (i + 1) % messages.length);

      // slide the message in
      setShowMessage(true);

      setTimeout(() => {
        setShowMessage(false);
      }, 3000);

    }, 4000);

    return () => {
      clearInterval(intervalId);
    };
    
  }, []);


  return (
    <PromotionsContainer ref={containerRef}>
      <Slide
        direction={showMessage ? 'left' : 'right'}
        in={showMessage}
        timeout={{enter: 600, exit: 300}}
        container={containerRef.current}
      >
        <MessageContainer>
          <MessageText>
            { messages[messageIndex] }
          </MessageText>
        </MessageContainer>
      </Slide>
    </PromotionsContainer>
  )
}

export default Promotions;