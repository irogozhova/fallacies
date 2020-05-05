import styled from "styled-components";

export const Overlay = styled.div`
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 999;
  opacity: 1;
  overflow-x: hidden;
  overflow-y: auto;
`;

export const Modal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: auto;
  padding: 30px;
  background-color: #fff;

  & > div:first-child {
    margin-right: 20px;
  }
`;
