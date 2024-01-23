import * as S from "./styles";

import Google from "../../assets/images/google.png";
import Microsoft from "../../assets/images/microsoft.png";
import Airbnb from "../../assets/images/airbnb.png";
import Axure from "../../assets/images/axure.png";
import Apple from "../../assets/images/apple.png";
import Facebook from "../../assets/images/facebook.png";
import Nokia from "../../assets/images/nokia.png";
import Oracle from "../../assets/images/oracle.png";
import { Btn } from "../Btn";

export const Investors = () => {
  return (
    <S.Container>
      <S.Content>
        <h2>Nossos Investidores</h2>
        <S.InvestorsItens>
          <li>
            <img src={Google} alt="Google" />
          </li>
          <li>
            <img src={Microsoft} alt="Microsoft" />
          </li>
          <li>
            <img src={Airbnb} alt="Airbnb" />
          </li>
          <li>
            <img src={Axure} alt="Axure" />
          </li>
          <li>
            <img src={Apple} alt="Apple" />
          </li>
          <li>
            <img src={Facebook} alt="Facebook" />
          </li>
          <li>
            <img src={Nokia} alt="Nokia" />
          </li>
          <li>
            <img src={Oracle} alt="Oracle" />
          </li>
        </S.InvestorsItens>
        <Btn width="260px" padding="18px">
          Se torne um investidor
        </Btn>
      </S.Content>
    </S.Container>
  );
};
