import styled from "styled-components";
import { colors } from "../../styles";
import { BtnContainer } from "../Btn/styles";

type BtnProps = {
  borderColor: string;
  color?: string;
};

export const Container = styled.section`
  width: 100%;
  background-color: ${colors.mediumGray};
  padding-top: 96px;
`;

export const Content = styled.div`
  max-width: 1160px;
  width: 100%;
  margin: 0 auto;

  h1 {
    font-size: 2.125rem;
    font-weight: bold;
    line-height: 130%;
    color: ${colors.secondaryWhite};
    text-align: center;
    margin-bottom: 60px;
  }
`;

export const CardContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const CardItem = styled.div<BtnProps>`
  width: 370px;
  height: 404px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.primaryWhite};
  padding: 30px 0;
  color: ${(props) => (props.color ? props.color : colors.deepBlack)};
  border-radius: 20px;

  h4 {
    font-size: 1.5rem;
    font-weight: 800;
    line-height: 2.375rem;
  }

  span {
    font-size: 3.75rem;
    font-weight: bold;
  }

  p {
    width: 300px;
    font-family: "Raleway", sans-serif;
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 400;
    text-align: center;
  }

  ${BtnContainer} {
    border: 1px solid;
    border-color: ${(props) => props.borderColor};
  }
`;
