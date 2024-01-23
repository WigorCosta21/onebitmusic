import styled from "styled-components";
import { colors } from "../../styles";

export const Container = styled.section`
  width: 100%;
  background-color: ${colors.mediumGray};
  padding-top: 210px;
`;

export const Content = styled.div`
  max-width: 1160px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 2.125rem;
    font-weight: bold;
    line-height: 130%;
    color: ${colors.secondaryWhite};
    margin-bottom: 60px;
  }
`;

export const InvestorsItens = styled.ul`
  width: 100%;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: space-around;
  align-items: center;

  li img {
    width: 170px;
    margin-bottom: 60px;
  }
`;
