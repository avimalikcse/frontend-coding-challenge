import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";

import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import StyledTableCell from "../../shared/StyleTableCell";
import StyledTableRow from "../../shared/StyleTableRow";
import TableFilters from "./filterRow";

type AbsenceTableProps = {
  allAbsences: IAbsences[];
};

/**
 * table component to display absence records
 *
 * @param param0 allAbsence Data from parent component
 */
export default function AbsenceTable({ allAbsences }: AbsenceTableProps) {
  return (
    <div>
      {/* filter row, to display filter fields */}
      <TableFilters></TableFilters>

      {/* Main Table  */}
      <TableContainer component={Paper}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell>Type of Absence</StyledTableCell>
              <StyledTableCell>Period</StyledTableCell>
              <StyledTableCell>Member Note</StyledTableCell>
              <StyledTableCell>Status</StyledTableCell>
              <StyledTableCell>Admitter Note</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* Display No results founds, in case 0 matching records */}
            {allAbsences.length === 0 && (
              <tr>
                <td>No Record Found!! Please change filter Criteria </td>
              </tr>
            )}

            {allAbsences.map((absenceRow: IAbsences) => {
              return (
                <StyledTableRow key={absenceRow.id}>
                  <StyledTableCell>
                    {absenceRow.memberDetails.name}
                  </StyledTableCell>
                  <StyledTableCell>{absenceRow.type}</StyledTableCell>
                  <StyledTableCell>
                    {absenceRow.startDate} - {absenceRow.endDate}
                  </StyledTableCell>
                  <StyledTableCell>{absenceRow.memberNote}</StyledTableCell>
                  <StyledTableCell>{absenceRow.status}</StyledTableCell>
                  <StyledTableCell>{absenceRow.admitterNote}</StyledTableCell>
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
