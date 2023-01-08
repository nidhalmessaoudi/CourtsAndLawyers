import React, { useRef, useState, useEffect } from "react";
import Calendar from "@toast-ui/react-calendar";
import type { Options as CalendarOptions } from "@toast-ui/calendar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import IconButton from "@mui/material/IconButton";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";

import CaseForm from "./CaseForm";

import "@toast-ui/calendar/dist/toastui-calendar.min.css";
import classes from "./Diary.module.css";

const DialogTransition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Diary() {
  const calendarRef = useRef<Calendar>(null);
  const [calendarDate, setCalendarDate] = useState<string | null>(null);
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  const calendarTemplate: CalendarOptions["template"] = {
    monthDayName(model) {
      return <h3 className={classes["calendar-day-name"]}>{model.label}</h3>;
    },
  };

  useEffect(() => {
    if (!calendarRef.current) {
      return;
    }

    const calendarInstance = calendarRef.current.getInstance()!;

    const date = calendarInstance.getDate();

    calendarInstance.on("selectDateTime", function () {
      setDialogIsOpen(true);
      calendarInstance.clearGridSelections();
    });

    setCalendarDate(
      `${date
        .toDate()
        .toLocaleString("en-US", { month: "long", year: "numeric" })}`
    );

    calendarInstance.createEvents([
      {
        raw: { text: "Hello" },
        title: "Hiii VS HEllo",
        start: new Date(),
        isAllday: true,
        category: "allday",
        backgroundColor: "#FAAB78",
        dragBackgroundColor: "#FAAB78",
        color: "#ffffff",
        borderColor: "#FF6E31",
        customStyle: { marginTop: "12px" },
        isReadOnly: true,
      },
    ]);
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

  function dialogCloseHandler() {
    setDialogIsOpen(false);
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
      <div className={classes.calendar}>
        <Calendar
          usageStatistics={false}
          view="month"
          gridSelection={true}
          ref={calendarRef}
          useFormPopup={false}
          useDetailPopup={false}
          template={calendarTemplate}
        />
      </div>
      <Dialog
        open={dialogIsOpen}
        fullScreen
        hideBackdrop={true}
        TransitionComponent={DialogTransition}
        onClose={dialogCloseHandler}
      >
        <AppBar
          color="transparent"
          sx={{
            position: "relative",
            boxShadow: "none",
            borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
          }}
        >
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="close"
              onClick={dialogCloseHandler}
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Create New Case
            </Typography>
            <Button color="inherit">save</Button>
          </Toolbar>
        </AppBar>
        <CaseForm />
      </Dialog>
    </>
  );
}

export default Diary;
