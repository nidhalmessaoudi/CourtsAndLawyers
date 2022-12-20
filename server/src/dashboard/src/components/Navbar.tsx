import Icon from "./Icon";
import classes from "./Navbar.module.css";

function Navbar() {
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
      <div className={classes.profile}>
        <Icon name="menuOutline" className={classes.icon1} />
        <Icon name="personCircleOutline" className={classes.icon2} />
      </div>
    </div>
  );
}

export default Navbar;
