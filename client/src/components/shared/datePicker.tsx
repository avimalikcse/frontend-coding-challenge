import "date-fns";
import React from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

type datePickerProps = {
  handleChange: (date: Date | null) => void;
  label:string,
  date:Date|null,
};

export default function DatePicker({ handleChange,label,date }: datePickerProps) {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(date);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    handleChange(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label={`${label || 'Select Date'}`}
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
