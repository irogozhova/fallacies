import React from "react";

import * as Styled from "./Modal.styled";

type Props = {
  children?: any,
};

const Modal = ({ children }: Props) => {
  return (
    <Styled.Overlay>
      <Styled.Modal>
        {children}
      </Styled.Modal>
    </Styled.Overlay>
  )
}

export default Modal;