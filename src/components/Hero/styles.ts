import styled from "styled-components";

import HeroImg from "../../assets/images/hero.png";
import { colors } from "../../styles";

export const Hero = styled.div`
  width: 100%;
  height: 964px;
  background-image: url(${HeroImg});
  background-repeat: no-repeat;
  background-size: cover;
  padding: 0 16px;
`;

export const Content = styled.div`
  max-width: 1360px;
  width: 100%;
  margin: 0 auto;

  h1 {
    max-width: 970px;
    width: 100%;
    margin: 0 auto;
    font-size: 4.5rem;
    color: ${colors.primaryWhite};
    font-weight: bold;
    text-align: center;
    margin-top: 67px;
  }

  span {
    color: ${colors.vibrantRed};
  }

  p {
    max-width: 970px;
    width: 100%;
    margin: 0 auto;
    margin-top: 40px;
    font-size: 1.5rem;
    line-height: 2.375rem;
    color: ${colors.primaryWhite};
    text-align: center;
    font-family: "Raleway", sans-serif;
  }
`;

export const PlayerContainer = styled.div`
  max-width: 970px;
  width: 100%;
  margin: 0 auto;
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
`;

export const PlayBtn = styled.button`
  width: 223px;
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  gap: 20px;
  font-weight: 800;
  color: ${colors.primaryWhite};
  font-size: 1.25rem;
`;
