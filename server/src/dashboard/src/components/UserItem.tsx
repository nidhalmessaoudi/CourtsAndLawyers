import Icon from "./Icon";

import classes from "./UserItem.module.css";

interface Props {
  name: string;
}

function UserItem(props: Props) {
  return (
    <>
      <Icon name="person" className={classes.icon} />
      <span>{props.name}</span>
    </>
  );
}

export default UserItem;
