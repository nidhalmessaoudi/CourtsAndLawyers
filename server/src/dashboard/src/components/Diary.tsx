import { useRef, useState, useEffect } from "react";

import Calendar from "@toast-ui/react-calendar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import IconButton from "@mui/material/IconButton";

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
            <IconButton
              aria-label="Previous Month"
              color="warning"
              onClick={calendarHandler("back")}
            >
              <ArrowBackIosOutlinedIcon />
            </IconButton>
            <Button
              variant="outlined"
              color="warning"
              onClick={calendarHandler("today")}
            >
              Today
            </Button>
            <IconButton
              aria-label="Next Month"
              color="warning"
              onClick={calendarHandler("next")}
            >
              <ArrowForwardIosOutlinedIcon />
            </IconButton>
          </div>
          <Typography>{calendarDate}</Typography>
        </div>
        <Button
          variant="contained"
          color="warning"
          onClick={() => {
            console.log("cliked");
          }}
        >
          New Case
        </Button>
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
