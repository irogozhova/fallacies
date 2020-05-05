import React, { useState, useCallback } from "react";
import ReactCardFlip from 'react-card-flip';

import CardSide from './CardSide';

import * as Styled from "./Card.styled";

type Props = {
  index: number,
  icon: string,
  engContent: object;
  ruContent: object,
};

const Card = ({ index, icon, engContent, ruContent }: Props) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = useCallback((e) => {
    e.preventDefault();
    setIsFlipped(!isFlipped)
  }, [isFlipped]);

  return (
    <Styled.Root>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <CardSide
          index={index}
          icon={icon}
          content={engContent}
          onFlipBtnClick={handleClick}
        />
        <CardSide
          index={index}
          content={ruContent}
          onFlipBtnClick={handleClick}
        />
      </ReactCardFlip>
    </Styled.Root>
  );
}

export default Card;