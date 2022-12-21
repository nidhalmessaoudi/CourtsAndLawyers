import { useCallback, useState, MouseEvent } from "react";

import Icon from "./Icon";
import classes from "./Navbar.module.css";
import UserMenu from "./UserMenu";

function Navbar() {
  const [showUserMenu, setShowUserMenu] = useState(false);

  function userMenuClickHandler(e: MouseEvent<HTMLDivElement>) {
    setShowUserMenu(true);

    if (showUserMenu !== true) {
      e.stopPropagation();
    }
  }

  const closeHandler = useCallback(function () {
    setShowUserMenu(false);
  }, []);

  return (
    <div className={classes.container}>
      <h3 className={classes.brand}>
        <Icon name="layersOutline" className={classes.icon} />
        <span className={classes.name}>CourtsAndLawyers</span>
        <span className={classes.symbol}>NG</span>
      </h3>
      {/* <div>
        <a href="#test">Terms of use</a>
        <a href="#test">Privacy policy</a>
      </div> */}
      <div className={classes.profile} onClick={userMenuClickHandler}>
        <Icon name="menuOutline" className={classes.icon1} />
        <Icon name="personCircleOutline" className={classes.icon2} />
        {showUserMenu && <UserMenu onClose={closeHandler} />}
      </div>
    </div>
  );
}

export default Navbar;
