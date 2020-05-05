import styled from "styled-components";

export const Root = styled.div`
  position: relative;
`;

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const PlaceHolder = styled.div`
  width: 245px;
  height: 0;
`;

export const GenerateBtn = styled.button`
  position: fixed;
  bottom: 3vh;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 260px;
  height: 45px;
  border-radius: 25px;
  background-color: black;
  font-family: 'Noto Sans', sans-serif;
  font-size: 13px;
  color: #fff;
  cursor: pointer;
  border: none;
  outline: none;
  z-index: 1000;

  img {
    width: 20px;
    height: 20px;
  }
`;

export const Numbers = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: white;
    margin-right: 3px;
    margin-left: 3px;
    color: #000;

    &:first-child {
      margin-left: 10px;
    }
  }
`;