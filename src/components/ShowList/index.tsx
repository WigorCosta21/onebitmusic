import { Table } from "../Table";
import * as S from "./styles";

export const ShowList = () => {
  return (
    <S.Container>
      <S.ContentInfo>
        <S.Title>Nossa Programação</S.Title>
        <S.Days>
          <S.DayCard>
            <S.Paragraph opacity="1">Dia 01</S.Paragraph>
            <S.Span opacity="0.5">23 Setembro</S.Span>
            <S.Line opacity="1" />
          </S.DayCard>
          <S.DayCard>
            <S.Paragraph opacity="0.5">Dia 02</S.Paragraph>
            <S.Span opacity="0.2">24 Setembro</S.Span>
            <S.Line opacity="0.1" />
          </S.DayCard>
          <S.DayCard>
            <S.Paragraph opacity="0.5">Dia 03</S.Paragraph>
            <S.Span opacity="0.2">25 Setembro</S.Span>
            <S.Line opacity="0.1" />
          </S.DayCard>
        </S.Days>
        <Table />
      </S.ContentInfo>
    </S.Container>
  );
};
