import styled from "styled-components";
import { colors } from "./../../styles";

export const Header = styled.header`
  max-width: 1160px;
  width: 100%;
  height: 120px;
  margin: 0 auto;
  padding: 46px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Nav = styled.nav`
  display: flex;

  ul {
    display: flex;
    align-items: center;
    list-style: none;
    gap: 40px;
  }

  a {
    text-decoration: none;
    color: ${colors.primaryWhite};
    text-transform: uppercase;
    font-weight: 600;
    font-size: 0.875rem;
  }
`;
