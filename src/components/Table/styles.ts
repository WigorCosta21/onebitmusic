import styled from "styled-components";
import { colors } from "../../styles";

type TdProps = {
  fontWeight: string;
};

export const Table = styled.table`
  width: 100%;
  color: ${colors.secondaryWhite};
  font-family: "Raleway", sans-serif;
  border-collapse: collapse;
  border: 1px solid ${colors.secondaryWhite};
`;

export const Th = styled.th`
  font-weight: bold;
  line-height: 2.375rem;
  text-align: start;
  padding: 40px;
`;

export const Td = styled.td<TdProps>`
  font-weight: ${(props) => props.fontWeight};
  vertical-align: top;
  padding: 40px 30px;
  border-bottom: 1px solid ${colors.secondaryWhite};

  &.aside {
    vertical-align: middle;
  }
`;

export const Avatar = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1rem;
  line-height: 1.5rem;
  margin-bottom: 32px;

  img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  span {
    opacity: 0.5;
    font-weight: 400;
  }
`;

export const Aside = styled.aside`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 1rem;
  font-weight: bold;

  img {
    width: 20px;
    height: 20px;
  }

  &.live {
    color: ${colors.vibrantRed};
  }
`;
