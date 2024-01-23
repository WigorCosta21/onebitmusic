import { colors } from "../../styles";
import { Btn } from "../Btn";
import * as S from "./styles";

export const Cards = () => {
  return (
    <S.Container>
      <S.Content>
        <h1>Escolha o tipo de ingresso</h1>
        <S.CardContent>
          <S.CardItem borderColor="">
            <h4>Basico</h4>
            <span>R$100</span>
            <p>
              Acesso aos shows digitais Experiência musical imersiva Preço
              acessível
            </p>
            <Btn width="161px" padding="18px">
              Saber mais
            </Btn>
          </S.CardItem>

          <S.CardItem borderColor="">
            <h4>Padrão</h4>
            <span>R$150</span>
            <p>
              Acesso aos shows digitais Benefícios extras Possibilidade de
              interagir com os artistas
            </p>
            <Btn
              width="161px"
              padding="18px"
              backgroudColor={colors.deepBlack}
              color={colors.primaryWhite}
            >
              Saber mais
            </Btn>
          </S.CardItem>

          <S.CardItem borderColor="" color={colors.vibrantRed}>
            <h4>VIP</h4>
            <span>R$200</span>
            <p>
              Acesso aos shows digitais Experiência musical imersiva Preço
              acessível
            </p>
            <Btn width="161px" padding="18px" color={colors.vibrantRed}>
              Saber mais
            </Btn>
          </S.CardItem>
        </S.CardContent>
      </S.Content>
    </S.Container>
  );
};
