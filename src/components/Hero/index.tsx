import { Menu } from "../Menu";
import * as S from "./styles";

import PlayImg from "../../assets/icons/play.png";
import { Btn } from "../Btn";
import { colors } from "../../styles";

export const Hero = () => {
  return (
    <S.Hero>
      <Menu />
      <S.Content>
        <h1>
          A sua melhor Experiencia <span>musical Digital</span>
        </h1>
        <p>
          Prepare-se para uma experiência incrível e envolvente, onde a arte se
          une à performance para criar momentos inesquecíveis. Nossos shows
          artísticos são projetados para encantar, inspirar e transportar você
          para um mundo de criatividade e expressão.
        </p>
        <S.PlayerContainer>
          <Btn
            width="144px"
            padding="20px"
            backgroudColor={colors.vibrantRed}
            color={colors.primaryWhite}
          >
            Começar
          </Btn>
          <S.PlayBtn>
            <img src={PlayImg} alt="Botão Play" />
            Assistir Vídeo
          </S.PlayBtn>
        </S.PlayerContainer>
      </S.Content>
    </S.Hero>
  );
};
