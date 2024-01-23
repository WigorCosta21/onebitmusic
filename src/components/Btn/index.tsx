import { ReactNode } from "react";
import * as S from "./styles";

export type BtnProps = {
  children: ReactNode;
  width: string;
  color?: string;
  padding: string;
  backgroudColor?: string;
};

export const Btn = ({
  children,
  width,
  color,
  padding,
  backgroudColor,
}: BtnProps) => {
  return (
    <S.BtnContainer
      width={width}
      color={color}
      padding={padding}
      backgroudColor={backgroudColor}
    >
      {children}
    </S.BtnContainer>
  );
};
