import styled from "styled-components";

import HeroImg from "../../assets/images/hero.png";
import { colors } from "../../styles";

export const Hero = styled.div`
  width: 100%;
  height: 964px;
  background-image: url(${HeroImg});
  background-repeat: no-repeat;
  background-size: cover;
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
    color: ${colors.white};
    font-weight: bold;
    text-align: center;
    margin-top: 67px;
  }

  span {
    color: ${colors.red};
  }

  p {
    max-width: 970px;
    width: 100%;
    margin: 0 auto;
    margin-top: 40px;
    font-size: 1.5rem;
    color: ${colors.white};
    text-align: center;
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

export const StartBtn = styled.button`
  width: 144px;
  color: ${colors.white};
  background-color: ${colors.red};
  border: none;
  border-radius: 8px;
  padding: 18px 0;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
`;

export const PlayBtn = styled.button`
  width: 223px;
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  gap: 20px;
  font-weight: 800;
  color: ${colors.white};
  font-size: 1.25rem;
`;
