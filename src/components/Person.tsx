import { FC } from "react";

type PersonProps = {
  name: {
    first: string;
    second: string;
  };
};

export const Person: FC<PersonProps> = (props) => {
  return (
    <div>
      <h2>
        {props.name.first}
        {props.name.second}
      </h2>
    </div>
  );
};
