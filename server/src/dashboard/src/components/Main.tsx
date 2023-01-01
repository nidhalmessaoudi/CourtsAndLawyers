import { PropsWithChildren } from "react";

import classes from "./Main.module.css";

interface Props extends PropsWithChildren {
  actionBtn?: {
    text: string;
    action: () => void;
  };
}

function Main(props: Props) {
  return <div className={classes.container}>{props.children}</div>;
}

export default Main;
