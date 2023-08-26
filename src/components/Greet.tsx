import { FC } from "react";

type GreetProps = {
  name: string;
  messageCount: number;
  isLoggedIn: boolean;
};

export const Greet: FC<GreetProps> = (props) => {
  return (
    <div>
      <h2>
        {props.isLoggedIn
          ? `Welcome ${props.name}! You have ${props.messageCount} unread messages`
          : `Welcome Guest`}
      </h2>
    </div>
  );
};
