import styled from "styled-components";
import { BtnProps } from ".";
import { colors } from "../../styles";

export const BtnContainer = styled.button<BtnProps>`
  width: ${(props) => props.width};
  color: ${(props) => (props.color ? props.color : colors.deepBlack)};
  background-color: ${(props) =>
    props.backgroudColor ? props.backgroudColor : colors.primaryWhite};
  font-size: 1rem;
  font-weight: bold;
  padding: ${(props) => props.padding} 0;
  border: none;
  border-radius: 8px;
  gap: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
