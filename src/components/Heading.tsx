import { FC } from "react";

type HeadingProps = {
  children: string;
};

export const Heading: FC<HeadingProps> = ({ children }) => {
  return <h2>{children}</h2>;
};
