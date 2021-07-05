import React, { useEffect } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import DatePicker from "../../shared/datePicker";
import { useDispatch } from "react-redux";

import {
  applyFilter,
  resetFilter,
} from "../../../store/actions/actionCreators";
import { Button } from "@material-ui/core";
/**
 * Component to display Table Filters
 */
const useStyles = makeStyles((theme: Theme) =>
  // create Styles
  //@todo: move to other file
  createStyles({
    selectDropdown: {
      width: "75%",
      background: "white",
    },
    flexDisplay: {
      display: "flex",
      flexWrap: "nowrap",
      alignItems: "center",
    },
    flexItem: {
      alignItems: "self",
      width: "18%",
      marginLeft: "1%",
    },
  })
);

export default function TableFilter() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const styleClasses = useStyles();
  const [typeFilter, setTypeFilter] = React.useState(""); // initial value of leave type filter
  const [startDate, setStartDate] = React.useState<Date | null>(null); // start date of leave period
  const [endDate, setEndDate] = React.useState<Date | null>(null); // end date of leave period

  useEffect(() => {
    if (typeFilter) {
      dispatch(applyFilter("absenceType", typeFilter));
    }
  }, [typeFilter]); // dispatch filter action in case user selected a type filter

  useEffect(() => {
    if (startDate) {
      dispatch(applyFilter("startDate", startDate)); // dispatch start Date filter to get results
    }
  }, [startDate]);

  useEffect(() => {
    if (endDate) {
      dispatch(applyFilter("endDate", endDate)); // dispatch End date filter to get matching results
    }
  }, [endDate]);

  const handleChangeFilterType = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setTypeFilter(event.target.value as string);
  }; // handle onChange event of absence Type dropdown

  // set date on selection of datePicker Date
  const applyDateChangeFilter = (type: string, date: Date | null) => {
    if (type === "startDate") {
      setStartDate(date);
    }
    if (type === "endDate") {
      setEndDate(date);
    }
  };

  // handle Change HOC function
  // create A HOC to determine the start|end date filter
  const handleChangeDate = (type: string) => {
    return (date: Date | null) => {
      applyDateChangeFilter(type, date);
    };
  };

  // reset filter values both from component's state as well as redux state
  const handleResetFilters = () => {
    setTypeFilter("");
    setStartDate(null);
    setEndDate(null);
    dispatch(resetFilter());
  };
  return (
    <div className={styleClasses.flexDisplay}>
      <div className={styleClasses.flexItem}>Filter By</div>
      <div className={styleClasses.flexItem}>
        <Select
          className={classes.selectDropdown}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={typeFilter}
          placeholder="filters"
          displayEmpty
          onChange={handleChangeFilterType}
        >
          <MenuItem value="" disabled>
            --Filter by Type--
          </MenuItem>
          <MenuItem value="vacation">Vacation</MenuItem>
          <MenuItem value="sickness">Sickness</MenuItem>
          <MenuItem value="all">All</MenuItem>
        </Select>
      </div>
      <div className={styleClasses.flexItem}>
        <DatePicker
          key="startDate"
          date={startDate}
          label="Start Date"
          handleChange={handleChangeDate("startDate")}
        ></DatePicker>
      </div>
      <div className={styleClasses.flexItem}>
        {" "}
        <DatePicker
          key="endDate"
          label="End Date"
          handleChange={handleChangeDate("endDate")}
          date={endDate}
        ></DatePicker>
      </div>
      <div className={styleClasses.flexItem}>
        <Button
          onClick={handleResetFilters}
          variant="contained"
          color="primary"
        >
          Reset
        </Button>
      </div>
    </div>
  );
}
