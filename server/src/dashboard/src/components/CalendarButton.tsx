import Icon from "./Icon";

import classes from "./CalendarButton.module.css";

interface Props {
  text?: string;
  icon?: string;
}

function CalendarButton(props: Props) {
  return (
    <button className={classes.btn}>
      {props.text ? (
        props.text
      ) : (
        <Icon name={props.icon!} className={classes.icon} />
      )}
    </button>
  );
}

export default CalendarButton;
