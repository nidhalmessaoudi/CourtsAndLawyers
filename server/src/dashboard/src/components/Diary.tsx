import Calendar from "@toast-ui/react-calendar";

import "@toast-ui/calendar/dist/toastui-calendar.min.css";

function Diary() {
  return (
    <Calendar usageStatistics={false} view="month" gridSelection={false} />
  );
}

export default Diary;
