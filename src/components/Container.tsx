import { type } from "@testing-library/user-event/dist/type";
import React from "react";

type ContainerProps = {
  styles: React.CSSProperties;
};

const Container = (props: ContainerProps) => {
  return <div style={props.styles}>Text Content goes here</div>;
};

export default Container;
