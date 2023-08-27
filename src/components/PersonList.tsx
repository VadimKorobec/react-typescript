import { FC } from "react";
import { Name } from "./Person.types";

type PersonsListProps = {
  names: Name[];
};

export const PersonList: FC<PersonsListProps> = (props) => {
  return (
    <div>
      {props.names.map((name) => (
        <h2 key={name.first}>
          {name.first} {name.second}
        </h2>
      ))}
    </div>
  );
};
