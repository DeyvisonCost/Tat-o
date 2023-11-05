import { FC } from "react";
import { H1 } from "./style";
import { Props } from "./types";

export const MeuH1: FC<Props> = ({ text }) => {
  return <H1>{text}</H1>;
};
