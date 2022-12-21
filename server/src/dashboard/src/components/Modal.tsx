import { PropsWithChildren, KeyboardEvent } from "react";

import Icon from "./Icon";

import classes from "./Modal.module.css";

interface Props extends PropsWithChildren {
  heading: string;
  closeIt: () => void;
}

function Modal(props: Props) {
  function escapePressHandler(e: KeyboardEvent<HTMLDivElement>) {
    if (e.key === "Escape") {
      e.preventDefault();
      props.closeIt();
    }
  }

  return (
    <>
      <div className={classes.overlay} onClick={props.closeIt}></div>
      <div
        className={classes.modal}
        tabIndex={0}
        onKeyDown={escapePressHandler}
      >
        <div className={classes.topbar}>
          <h3 className={classes.heading}>{props.heading}</h3>
          <Icon
            name="closeOutline"
            className={classes.close}
            onClick={props.closeIt}
          />
        </div>
        <div className={classes.container}>
          <div className={classes.body}>{props.children}</div>
        </div>
      </div>
    </>
  );
}

export default Modal;
