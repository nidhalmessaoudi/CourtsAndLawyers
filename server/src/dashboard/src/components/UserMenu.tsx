import { useEffect, useRef, MouseEvent as MV } from "react";

import classes from "./UserMenu.module.css";

interface Props {
  onClose: () => void;
}

function UserMenu(props: Props) {
  const menuRef = useRef<HTMLDivElement | null>(null);
  const logOutFormRef = useRef<HTMLFormElement | null>(null);

  const { onClose } = props;

  useEffect(() => {
    function closeHandler(e: MouseEvent) {
      const target = e.target as HTMLElement;

      if (target === menuRef.current || menuRef.current?.contains(target)) {
        return;
      }

      onClose();
    }

    document.addEventListener("click", closeHandler);

    return () => {
      document.removeEventListener("click", closeHandler);
    };
  }, [onClose]);

  function logOutHandler(e: MV<HTMLDivElement>) {
    if (!logOutFormRef.current) {
      return;
    }

    e.stopPropagation();

    onClose();

    logOutFormRef.current.submit();
  }

  return (
    <div className={classes.container} tabIndex={0} ref={menuRef}>
      <div className={classes.user}>
        {/* <Icon name="personOutline" className={classes.icon} /> */}
        <h4 className={classes.details}>
          <span className={classes.name}>Laurem Ipsum</span>
          <span className={classes.email}>lauremipsum@gmail.com</span>
        </h4>
      </div>
      <hr className={classes.break} />
      <div className={classes.item}>Profile Settings</div>
      <hr className={classes.break} />
      <div className={classes.item} onClick={logOutHandler}>
        <form
          action={`${window.location.origin}/logout`}
          method="POST"
          ref={logOutFormRef}
        >
          <input type="hidden" />
        </form>
        Log Out
      </div>
    </div>
  );
}

export default UserMenu;
