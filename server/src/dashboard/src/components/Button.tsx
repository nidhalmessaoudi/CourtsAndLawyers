import classes from "./Button.module.css";

interface Props {
  text: string;
  onClick: () => void;
}

function Button(props: Props) {
  return (
    <button className={classes.btn} onClick={props.onClick}>
      {props.text}
    </button>
  );
}

export default Button;
