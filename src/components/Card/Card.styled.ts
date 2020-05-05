import styled from "styled-components";

export const Front = styled.div`
  display: flex;
  width: 200px;
  height: 200px;
  background-color: red;
  color: white;
`;

export const Back = styled(Front)`
  background-color: blue;
`;