import styled from "styled-components";
import { colors } from "../../styles";

export const Container = styled.div`
  display: flex;
  color: ${colors.secondaryWhite};
`;

export const Left = styled.div`
  flex: 1;
  padding-left: 80px;
  padding-top: 120px;
  background-color: ${colors.deepBlack};
  position: relative;
  height: 662px;

  h2 {
    font-size: 2.125rem;
    font-weight: bold;
    line-height: 130%;
  }
`;

export const Contacts = styled.div`
  margin-top: 126px;
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 40px;
`;

export const Img = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
`;

export const Right = styled.div`
  flex: 1;
  background-color: ${colors.mediumGray};
  padding-left: 140px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    font-size: 1.5rem;
    font-weight: 800;
    line-height: 2.375rem;
    color: ${colors.deepBlack};
  }
`;

export const Form = styled.div`
  width: 60%;
  font-family: "Raleway", sans-serif;
  color: ${colors.secondaryWhite};
  margin-top: 40px;
`;

export const FormItem = styled.div`
  opacity: 0.7;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 30px;

  label {
    width: 100%;
    font-size: 0.75rem;
    line-height: 1.125rem;
    font-weight: bold;
  }

  input {
    background-color: transparent;
    outline: none;
    border: none;
    border-bottom: 1px solid #e0e0e0;
  }
`;
