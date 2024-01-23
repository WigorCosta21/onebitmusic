import Show from "../../assets/images/show.png";
import Show2 from "../../assets/images/show_2.png";
import Artist1 from "../../assets/images/artist_1.png";
import Artist2 from "../../assets/images/artist_2.png";
import Artist3 from "../../assets/images/artist_3.png";
import Artist4 from "../../assets/images/artist_4.png";
import Arrow from "../../assets/icons/arrow.png";

import * as S from "./styles";
import { Btn } from "../Btn";

export const InfoBlock = () => {
  return (
    <S.Container>
      <S.ContentInfo gap="140px" paddingTop="132px">
        <S.StackedImage>
          <img className="overlay-image" src={Show} alt="Show" />
          <img src={Show2} alt="Show" />
        </S.StackedImage>
        <S.ContentAbout>
          <S.Title>Sobre a gente</S.Title>
          <S.Paragraph>
            Na onebitmusic, estamos redefinindo a maneira como experimentamos e
            nos envolvemos com a música, utilizando tecnologia de realidade
            virtual (VR) para criar shows e performances que transcendem os
            limites físicos e levam você a novos patamares de entretenimento
            musical.
          </S.Paragraph>
          <Btn width="176px" padding="20px">
            Ler mais <img src={Arrow} alt="Seta para direita" />
          </Btn>
        </S.ContentAbout>
      </S.ContentInfo>
      <S.ContentInfo className="content-reverse" paddingTop="190px" gap="30px">
        <S.CardImg>
          <S.CardImgItem>
            <S.ImgItem>
              <img className="artist_1" src={Artist1} alt="Artista 1" />
              <img className="artist_2" src={Artist2} alt="Artista 2" />
            </S.ImgItem>
          </S.CardImgItem>
          <S.CardImgItem>
            <S.ImgItem>
              <img className="artist_3" src={Artist3} alt="Artista 3" />
              <img className="artist_4" src={Artist4} alt="Artista 4" />
            </S.ImgItem>
          </S.CardImgItem>
        </S.CardImg>
        <S.ContentAbout>
          <S.Title>Artistas</S.Title>
          <S.Paragraph>
            No evento da OneBitMusic, você terá a oportunidade de desfrutar de
            uma incrível variedade de artistas talentosos. Nossa seleção musical
            abrange diferentes gêneros e estilos, garantindo uma experiência
            musical diversificada e emocionante. De DJs renomados a bandas
            cativantes, cada artista traz sua paixão e habilidade para criar
            performances envolventes. Prepare-se para se surpreender com músicas
            cativantes, ritmos vibrantes e momentos emocionantes durante todo o
            evento. Os artistas da OneBitMusic estão prontos para levar você a
            uma jornada musical única e inesquecível.
          </S.Paragraph>
          <Btn width="283px" padding="20px">
            Veja a lista completa <img src={Arrow} alt="Seta para direita" />
          </Btn>
        </S.ContentAbout>
      </S.ContentInfo>
    </S.Container>
  );
};
