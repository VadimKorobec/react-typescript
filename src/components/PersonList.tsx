import { FC } from "react";

type PersonsListProps = {
  names: {
    first: string;
    last: string;
  }[];
};

export const PersonList: FC<PersonsListProps> = (props) => {
  return (
    <div>
      {props.names.map((name) => (
        <h2 key={name.first}>
          {name.first} {name.last}
        </h2>
      ))}
    </div>
  );
};
