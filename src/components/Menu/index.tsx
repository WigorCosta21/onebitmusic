import LogoImg from "../../assets/images/onebitcode.png";
import CaminhoImg from "../../assets/images/caminho.png";

import * as S from "./styles";

export const Menu = () => {
  return (
    <S.Header>
      <S.Logo>
        <img src={LogoImg} alt="Onebitmusic" />
        <img src={CaminhoImg} alt="" />
      </S.Logo>
      <S.Nav>
        <ul>
          <li>
            <a href="#">inicio</a>
          </li>
          <li>
            <a href="#">artista</a>
          </li>
          <li>
            <a href="#">programação</a>
          </li>
          <li>
            <a href="#">contato</a>
          </li>
          <li>
            <S.Btn>comprar ingressos</S.Btn>
          </li>
        </ul>
      </S.Nav>
    </S.Header>
  );
};
