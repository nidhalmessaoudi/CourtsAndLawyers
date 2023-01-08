import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";

import classes from "./CaseForm.module.css";

function CaseForm() {
  const [startDate, setStartDate] = useState<Date | null>(null);

  return (
    <form className={classes.container}>
      <TextField
        variant="outlined"
        label="Case or Suit Number"
        fullWidth
        margin="normal"
      />
      <TextField variant="outlined" label="Party A" fullWidth margin="normal" />
      <TextField variant="outlined" label="Party B" fullWidth margin="normal" />
      <TextField
        variant="outlined"
        label="Court Address"
        fullWidth
        margin="normal"
      />
      <TextField variant="outlined" label="Judge" fullWidth margin="normal" />
      <TextField
        variant="outlined"
        label="Registrar"
        fullWidth
        margin="normal"
      />
      <TextField
        variant="outlined"
        label="Description"
        multiline
        minRows={6}
        fullWidth
        margin="normal"
      />
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <DatePicker
          label="Start Date"
          value={startDate}
          onChange={(newDate) => {
            setStartDate(newDate);
          }}
          renderInput={(params) => (
            <TextField {...params} fullWidth margin="normal" />
          )}
        />
      </LocalizationProvider>
      <Button
        color="primary"
        variant="contained"
        sx={{ marginTop: 1.5 }}
        type="submit"
      >
        Create
      </Button>
    </form>
  );
}

export default CaseForm;
