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
