import * as S from "./styles";

import YuiRonald from "../../assets/images/Yui-Ronald.png";
import BobJohn from "../../assets/images/Bob_John.png";
import EmmaSatoshi from "../../assets/images/Emma_Satoshi.png";
import SashaJackson from "../../assets/images/Sasha_Jackson.png";
import DianaBrock from "../../assets/images/Diana_Brock.png";
import Play from "../../assets/icons/play.png";
import Watch from "../../assets/icons/watch.png";
import Clock from "../../assets/icons/clock.png";

export const Table = () => {
  return (
    <S.Table>
      <thead>
        <tr>
          <S.Th>Horas</S.Th>
          <S.Th>Conteúdo</S.Th>
          <S.Th>Artista</S.Th>
          <S.Th></S.Th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <S.Td width="230px" fontWeight="400">
            11:00 AM to 12:00 PM
          </S.Td>
          <S.Td width="370px" fontWeight="700">
            Desfrute de uma performance emocionante com Yui Ronald, um artista
            solo que encanta o público com sua voz cativante e letras
            inspiradoras. Prepare-se para uma noite de músicas envolventes e
            momentos emocionantes.
          </S.Td>
          <S.Td width="270px" fontWeight="700">
            <S.Avatar>
              <img src={YuiRonald} alt="Artista Yui Ronald" />
              <div>
                <h4>Yui Ronald</h4>
                <span>Booth: 2F12</span>
              </div>
            </S.Avatar>
          </S.Td>
          <S.Td width="200px" fontWeight="700" className="aside">
            <S.Aside>
              Previa
              <img src={Play} alt="Botão play" />
            </S.Aside>
          </S.Td>
        </tr>

        <tr>
          <S.Td fontWeight="400">12:00 PM to 03:00 PM</S.Td>
          <S.Td fontWeight="700">
            O trio que vai levar você a uma jornada musical com suas harmonias
            vocais encantadoras e arranjos instrumentais cativantes. Prepare-se
            para desfrutar de um repertório diversificado que abrange diversos
            estilos musicais e emocione seus sentidos.
          </S.Td>
          <S.Td fontWeight="700">
            <S.Avatar>
              <img src={BobJohn} alt="Artista Bob John" />
              <div>
                <h4>Bob John</h4>
                <span>Booth: 3G12</span>
              </div>
            </S.Avatar>
            <S.Avatar>
              <img src={YuiRonald} alt="Artista Yui Ronald" />
              <div>
                <h4>Yui Ronald</h4>
                <span>Booth: 2F12</span>
              </div>
            </S.Avatar>
            <S.Avatar>
              <img src={EmmaSatoshi} alt="Artista Emma Satoshi" />
              <div>
                <h4>Emma Satoshi</h4>
                <span>Booth: 2A35</span>
              </div>
            </S.Avatar>
          </S.Td>
          <S.Td fontWeight="700" className="aside">
            <S.Aside className="live">
              Ao Vivo
              <img src={Watch} alt="Icone assistir" />
            </S.Aside>
          </S.Td>
        </tr>

        <tr>
          <S.Td width="230px" fontWeight="400">
            12:00 PM to 03:00 PM
          </S.Td>
          <S.Td width="370px" fontWeight="700">
            O trio que vai levar você a uma jornada musical com suas harmonias
            vocais encantadoras e arranjos instrumentais cativantes. Prepare-se
            para desfrutar de um repertório diversificado que abrange diversos
            estilos musicais e emocione seus sentidos.
          </S.Td>
          <S.Td width="270px" fontWeight="700">
            <S.Avatar>
              <img src={SashaJackson} alt="Artista Sasha Jackson" />
              <div>
                <h4>Sasha Jackson</h4>
                <span>Booth: 2F18</span>
              </div>
            </S.Avatar>
            <S.Avatar>
              <img src={DianaBrock} alt="Artista Diana Brock" />
              <div>
                <h4>Diana Brock</h4>
                <span>Booth: 2F24</span>
              </div>
            </S.Avatar>
          </S.Td>
          <S.Td fontWeight="700" className="aside">
            <S.Aside>
              Em breve
              <img src={Clock} alt="Icone relógio" />
            </S.Aside>
          </S.Td>
        </tr>
      </tbody>
    </S.Table>
  );
};
