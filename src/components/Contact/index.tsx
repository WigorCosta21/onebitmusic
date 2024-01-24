import Phone from "../../assets/icons/phone.png";
import Email from "../../assets/icons/email.png";
import Shape from "../../assets/images/Shape.png";

import * as S from "./styles";
import { Btn } from "../Btn";
import { colors } from "../../styles";

export const Contact = () => {
  return (
    <S.Container>
      <S.Left>
        <h3>Nos contate</h3>
        <S.Contacts>
          <S.ContactItem>
            <img src={Phone} alt="Ícone telefone" />
            <span>+55 99823-3232</span>
          </S.ContactItem>
          <S.ContactItem>
            <img src={Email} alt="Ícone e-mail" />
            <span>contato@onebitmusic.com</span>
          </S.ContactItem>
        </S.Contacts>
        <S.Img src={Shape} />
      </S.Left>
      <S.Right>
        <h2>Preencha com seus dados</h2>
        <S.Form>
          <S.FormItem>
            <label htmlFor="">Nome</label>
            <input type="text" />
          </S.FormItem>
          <S.FormItem>
            <label htmlFor="">Email</label>
            <input type="text" />
          </S.FormItem>
          <S.FormItem>
            <label htmlFor="">Mensagem</label>
            <input type="text" />
          </S.FormItem>

          <Btn
            width="100%"
            padding="18px"
            backgroudColor={colors.vibrantRed}
            color={colors.secondaryWhite}
          >
            Enviar
          </Btn>
        </S.Form>
      </S.Right>
    </S.Container>
  );
};
