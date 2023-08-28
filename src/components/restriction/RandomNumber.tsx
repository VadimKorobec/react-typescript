import { FC } from "react";

type RandomNumberProps = {
  value: number;
  isPositive?: boolean;
  isNegative?: boolean;
  isZero?: boolean;
};

export const RandomNumber: FC<RandomNumberProps> = ({
  value,
  isPositive,
  isNegative,
  isZero,
}) => {
  return (
    <div>
      {value} {isPositive && "positiv"} {isNegative && "negative"}
      {isZero && "zero"}
    </div>
  );
};
