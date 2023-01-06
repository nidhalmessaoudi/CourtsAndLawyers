import classes from "./CalendarButton.module.css";

interface Props {
  text?: string;
  icon?: string;
  onClick?: () => void;
}

function CalendarButton(props: Props) {
  return (
    <button className={classes.btn} onClick={props.onClick}>
      {props.text}
    </button>
  );
}

export default CalendarButton;
