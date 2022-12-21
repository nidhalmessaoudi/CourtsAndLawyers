import { PropsWithChildren } from "react";
import Button from "./Button";

import classes from "./Main.module.css";

interface Props extends PropsWithChildren {
  title: string;
  actionBtn?: {
    text: string;
    action: () => void;
  };
}

function Main(props: Props) {
  return (
    <div className={classes.container}>
      <div className={classes.topbar}>
        <h1>{props.title}</h1>
        <Button
          text="New Case"
          onClick={() => {
            console.log("cliked");
          }}
        />
      </div>
      {props.children}
    </div>
  );
}

export default Main;
