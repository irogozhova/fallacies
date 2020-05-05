import styled from "styled-components";

const getBgColor = (index: number) => {
  if (index === 0) {
    return "#000";
  } else if (index > 0 && index <= 7) {
    return "#4d6fac";
  } else if (index > 7 && index <= 16) {
    return "#ff4c4c";
  } else if (index > 16 && index <= 22) {
    return "brown";
  } else if (index > 22 && index <= 28) {
    return "#d43589";
  } else if (index > 28 && index <= 36) {
    return "purple";
  } else {
    return "green";
  }
};

export const Root = styled.div<{index: any}>`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 210px;
  height: 335px;
  padding: 10px;
  font-family: 'Noto Sans', sans-serif;
  font-size: 12px;
  color: white;
  background-color: ${({ index }) => getBgColor(index)};
`;

export const Name = styled.div`
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;

export const Description = styled.div`
  margin-bottom: 12px;
`;

export const Example = styled.div`
  font-style: italic;
`;

export const Icon = styled.img`
  display: block;
  margin: 0 auto 12px;
  width: 65px;
  height: auto;
`;

export const Button = styled.button`
  position: absolute;
  bottom: 7px;
  left: 10px;
`;

export const Index = styled.div`
  position: absolute;
  right: 10px;
  bottom: 7px;
  font-family: cursive;
  font-size: 17px;
`;