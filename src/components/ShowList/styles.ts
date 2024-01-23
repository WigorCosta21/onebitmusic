import styled from "styled-components";
import { colors } from "../../styles";

type ColorsProps = {
  opacity: string;
};

export const Container = styled.section`
  width: 100%;
  background-color: ${colors.mediumGray};
  padding: 0 16px;
`;

export const ContentInfo = styled.div`
  max-width: 1160px;
  margin: 0 auto;
  padding-top: 160px;
`;

export const Title = styled.h3`
  font-size: 2.125rem;
  line-height: 130%;
  font-weight: bold;
  color: ${colors.secondaryWhite};
  margin-bottom: 60px;
`;

export const Days = styled.div`
  width: 100%;
  display: flex;
  gap: 30px;
  margin-bottom: 40px;
`;

export const DayCard = styled.div`
  width: 370px;
  color: ${colors.deepBlack};
`;

export const Paragraph = styled.p<ColorsProps>`
  font-size: 1.5rem;
  line-height: 2.375rem;
  font-weight: 800;
  opacity: ${(props) => props.opacity};
`;

export const Span = styled.span<ColorsProps>`
  font-size: 1rem;
  font-weight: bold;
  opacity: ${(props) => props.opacity};
`;

export const Line = styled.div<ColorsProps>`
  width: 100%;
  height: 4px;
  background-color: ${colors.deepBlack};
  opacity: ${(props) => props.opacity};
  margin-top: 20px;
`;
