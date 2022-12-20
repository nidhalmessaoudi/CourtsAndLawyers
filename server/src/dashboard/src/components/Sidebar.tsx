import Icon from "./Icon";
import classes from "./Sidebar.module.css";

function Sidebar() {
  return (
    <div className={classes.container}>
      <div>
        <div className={classes.brand}>
          <h3 className={classes.name}>Dashboard</h3>
          <Icon name="logOutOutline" className={classes.icon} />
        </div>
        <div className={classes.items}>
          <div className={classes.item}>
            <Icon name="calendarOutline" />
            <span>E-Diary</span>
          </div>
          <div className={classes.item}>
            <Icon name="listOutline" />
            <span>Lists</span>
          </div>
          <div className={classes.item}>
            <Icon name="copyOutline" />
            <span>Notes</span>
          </div>
          <div className={classes.item}>
            <Icon name="attachOutline" />
            <span>Resources</span>
          </div>
          <div className={classes.item}>
            <Icon name="chatboxOutline" />
            <span>Contact Us</span>
          </div>
        </div>
      </div>
      <footer>
        © Copyright {new Date().getFullYear()}. Courts And Lawyers Nigeria.
      </footer>
    </div>
  );
}

export default Sidebar;
