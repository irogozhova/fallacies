import React, { useState, useCallback } from "react";
import ReactCardFlip from 'react-card-flip';

import * as Styled from "./Card.styled";

type Props = {
  engContent: object;
  ruContent: object,
};

const Card = (props: Props) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = useCallback((e) => {
    e.preventDefault();
    setIsFlipped(!isFlipped)
  }, [isFlipped]);

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      <Styled.Front>
        This is the front of the card.
        <button onClick={handleClick}>Click to flip</button>
      </Styled.Front>

      <Styled.Back>
        This is the back of the card.
        <button onClick={handleClick}>Click to flip</button>
      </Styled.Back>
    </ReactCardFlip>
  );
}

export default Card;