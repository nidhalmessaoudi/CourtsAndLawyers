import { useRef, useState, useEffect } from "react";

import Calendar from "@toast-ui/react-calendar";
import CalendarButton from "./CalendarButton";
import Icon from "./Icon";
import Button from "./Button";

import "@toast-ui/calendar/dist/toastui-calendar.min.css";
import classes from "./Diary.module.css";

function Diary() {
  const calendarRef = useRef<Calendar>(null);
  const [calendarDate, setCalendarDate] = useState<string | null>(null);

  useEffect(() => {
    if (!calendarRef.current) {
      return;
    }

    const date = calendarRef.current.getInstance()!.getDate();

    setCalendarDate(
      `${date
        .toDate()
        .toLocaleString("en-US", { month: "long", year: "numeric" })}`
    );
  }, []);

  function calendarHandler(action: "back" | "next" | "today") {
    return () => {
      if (!calendarRef.current) {
        return;
      }

      const calendarInstance = calendarRef.current.getInstance()!;

      calendarInstance.getDate();

      switch (action) {
        case "back":
          calendarInstance.prev();
          break;
        case "next":
          calendarInstance.next();
          break;
        case "today":
          calendarInstance.today();
          break;
      }

      const date = calendarInstance.getDate();

      setCalendarDate(
        `${date
          .toDate()
          .toLocaleString("en-US", { month: "long", year: "numeric" })}`
      );
    };
  }

  return (
    <>
      <div className={classes.topbar}>
        <div className={classes.left}>
          <h1>E-Diary</h1>
          <div className={classes["calendar-control"]}>
            <Icon
              name="chevronBackOutline"
              className={classes.icon}
              onClick={calendarHandler("back")}
            />
            <CalendarButton text="Today" onClick={calendarHandler("today")} />
            <Icon
              name="chevronForwardOutline"
              className={classes.icon}
              onClick={calendarHandler("next")}
            />
          </div>
          <p>{calendarDate}</p>
        </div>
        <Button
          text="New Case"
          onClick={() => {
            console.log("cliked");
          }}
        />
      </div>
      <Calendar
        usageStatistics={false}
        view="month"
        gridSelection={false}
        ref={calendarRef}
      />
    </>
  );
}

export default Diary;
