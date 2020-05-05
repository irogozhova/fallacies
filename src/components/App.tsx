import React, { useState, useCallback } from "react";
import Card from './Card';
import CardSide from './Card/CardSide';
import Modal from './Modal';
import dice from './dice.svg';

import * as Styled from "./App.styled";

import cards from './cards.json';

const generateCardNumbers = () => {
  const arr = [];
  while(arr.length < 5){
    let r = Math.floor(Math.random() * 44);
    if (arr.indexOf(r) === -1) {
      arr.push(r);
    }
  }

  return arr.sort((a, b) => a - b);
}

const App = () => {
  const [cardIndexes, setCardIndexes] = useState<number[] | null>(null);
  const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(null);

  const handleClick = useCallback((e) => {
    e.preventDefault();
    setCardIndexes(generateCardNumbers());
  },[]);

  const handleMouseOver = useCallback((item) => {
    console.log('item', item);
    setSelectedCardIndex(item);
  },[]);

  const handleMouseOut = useCallback(() => {
    setSelectedCardIndex(null);
  },[]);

  return (
    <Styled.Root>
      <Styled.Cards>
        {cards.map((card: any, i: number) => (
          <Card
            key={i}
            index={i}
            icon={card.icon}
            engContent={card.engCard}
            ruContent={card.ruCard}
          />
        ))}
        {/* placeholders for last flex row */}
        <Styled.PlaceHolder />
        <Styled.PlaceHolder />
        <Styled.PlaceHolder />
        <Styled.PlaceHolder />
        <Styled.PlaceHolder />
      </Styled.Cards>
      <Styled.GenerateBtn onClick={handleClick}>
        {cardIndexes === null ? (
          <>
            Get 5 random cards
            <img src={dice} alt="dice" />
          </>
          ) : (
            <Styled.Numbers>
              Your cards:
              {cardIndexes.map((item, i) => (
                <div
                  key={i}
                  onMouseOver={() => handleMouseOver(item)}
                  onMouseOut={handleMouseOut}
                >
                  <span>{item}</span>
                </div>
              ))}
            </Styled.Numbers>
          )
        }
      </Styled.GenerateBtn>
      {selectedCardIndex !== null &&
        <Modal>
          <CardSide
            index={selectedCardIndex}
            icon={cards[selectedCardIndex].icon}
            content={cards[selectedCardIndex].engCard}
          />
          <CardSide
            index={selectedCardIndex}
            icon={cards[selectedCardIndex].icon}
            content={cards[selectedCardIndex].ruCard}
          />
        </Modal>
      }
    </Styled.Root>
  );
}

export default App;
