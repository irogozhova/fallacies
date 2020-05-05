import React from "react";

import * as Styled from "./CardSide.styled";

const iconPath = 'https://raw.githubusercontent.com/Alexander230/fallacymania/master/src/';

type Props = {
  index?: number,
  icon?: string,
  content: any,
  onFlipBtnClick?: (ev: React.MouseEvent<HTMLButtonElement>) => void,
};

const CardSide = ({
  index,
  icon,
  content,
  onFlipBtnClick,
}: Props) => {
  return (
    <Styled.Root index={index}>
      <Styled.Name>{content.name}</Styled.Name>
      {icon &&
        <Styled.Icon src={`${iconPath}${icon}`} alt={icon} />
      }
      <Styled.Description>{content.description}</Styled.Description>
      <Styled.Example>{content.example}</Styled.Example>
      {onFlipBtnClick &&
        <Styled.Button onClick={onFlipBtnClick}>Click to flip</Styled.Button>
      }
      <Styled.Index>{index}</Styled.Index>
    </Styled.Root>
  )
}

export default CardSide;