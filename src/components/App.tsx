import React from "react";
import Card from './Card';

import * as Styled from "./App.styled";

import cards from './cards.json';

const App = () => {
  return (
    <Styled.Root>
      {cards.map((card: any, i: number) => (
        <Card
          key={i}
          engContent={card.engCard}
          ruContent={card.ruCard}
        />
      ))}
    </Styled.Root>
  );
}

export default App;
