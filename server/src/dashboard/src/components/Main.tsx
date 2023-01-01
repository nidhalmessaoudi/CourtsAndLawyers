import { PropsWithChildren } from "react";
import Button from "./Button";
import CalendarButton from "./CalendarButton";
import Icon from "./Icon";

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
        <div className={classes.left}>
          <h1>{props.title}</h1>
          <div className={classes["calendar-control"]}>
            <Icon name="chevronBackOutline" className={classes.icon} />
            <CalendarButton text="Today" />
            <Icon name="chevronForwardOutline" className={classes.icon} />
          </div>
          <p>2023.01</p>
        </div>
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
