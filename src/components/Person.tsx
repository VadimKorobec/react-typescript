import { FC } from "react";
import { PersonProps } from "./Person.types";

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
