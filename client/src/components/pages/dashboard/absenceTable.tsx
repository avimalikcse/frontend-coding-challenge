import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";

import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import StyledTableCell from "../../shared/StyleTableCell";
import StyledTableRow from "../../shared/StyleTableRow";

type AbsenceTableProps = {
  allAbsences: IAbsences[];
};

export default function AbsenceTable({ allAbsences }: AbsenceTableProps) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="right">Name</StyledTableCell>
            <StyledTableCell align="right">Type of Absence </StyledTableCell>
            <StyledTableCell align="right">Period</StyledTableCell>
            <StyledTableCell align="right">Member Note</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
            <StyledTableCell align="right">Admitter Note</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allAbsences.map((absenceRow: IAbsences) => {
            return (
              <StyledTableRow key={absenceRow.id}>
                <StyledTableCell align="right">
                  {absenceRow.memberDetails.name}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {absenceRow.type}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {absenceRow.startDate} - {absenceRow.endDate}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {absenceRow.memberNote}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {absenceRow.status}
                </StyledTableCell>
            <StyledTableCell align="right">{absenceRow.admitterNote}</StyledTableCell>
              </StyledTableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
