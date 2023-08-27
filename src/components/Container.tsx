import { FC } from "react";

type ContainerProps = {
  styles: React.CSSProperties;
};

export const Container: FC<ContainerProps> = (props) => {
  return <div style={props.styles}>Text content does here</div>;
};
