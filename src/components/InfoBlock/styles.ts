import styled from "styled-components";
import { colors } from "../../styles";

type BtnProps = {
  width: string;
};

type ContentInfoProps = {
  paddingTop: string;
  gap: string;
};

export const Container = styled.section`
  width: 100%;
  background: ${colors.mediumGray};

  .content-reverse {
    flex-direction: row-reverse;
  }
`;

export const ContentInfo = styled.div<ContentInfoProps>`
  max-width: 1160px;
  margin: 0 auto;
  padding-top: ${(props) => props.paddingTop};
  display: flex;
  gap: ${(props) => props.gap};
`;

export const StackedImage = styled.div`
  position: relative;
  img {
    max-width: 100%;
  }

  .overlay-image {
    position: absolute;
    top: 70px;
    left: 70px;
  }
`;

export const ContentAbout = styled.div`
  max-width: 570px;
  width: 100%;
`;

export const Title = styled.h3`
  font-size: 2.125rem;
  font-weight: bold;
  color: ${colors.secondaryWhite};
  margin-top: 120px;
  margin-bottom: 32px;
`;

export const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.5rem;
  color: ${colors.secondaryWhite};
  opacity: 0.7;
  font-family: "Raleway", sans-serif;
`;

export const Btn = styled.button<BtnProps>`
  width: ${(props) => props.width};
  margin-top: 80px;
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  font-size: 1rem;
  font-weight: bold;
  color: ${colors.deepBlack};
  border: none;
  border-radius: 8px;
`;

export const CardImg = styled.div`
  max-width: 670px;
  width: 100%;
  height: 712px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CardImgItem = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const ImgItem = styled.div`
  width: 100%;
  display: flex;
  gap: 30px;
  margin-bottom: 30px;
  position: relative;

  img.artist_1 {
    align-self: flex-end;
  }

  img.artist_2 {
    position: absolute;
    top: -50px;
    right: 0;
  }

  img.artist_3 {
    margin-top: 20px;
  }

  img.artist_4 {
    align-self: flex-start;
  }
`;
