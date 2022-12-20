import { PropsWithChildren } from "react";

import classes from "./Main.module.css";

function Main(props: PropsWithChildren) {
  return <div className={classes.container}>{props.children}</div>;
}

export default Main;
