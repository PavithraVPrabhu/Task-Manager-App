import React from "react";
import { Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";

export type Column<T> = {
  key: keyof T;
  header: string;
  render?: (item: T) => React.ReactNode;
};

type TableProps<T> = {
  data: T[];
  columns: Column<T>[];
};

function ReusableTableComponent<T>({ data, columns }: TableProps<T>) {
  return (
    <Table sx={{ minWidth: 650 }} aria-label="generic table">
      <TableHead>
        <TableRow>
          {columns.map((col) => (
            <TableCell key={String(col.key)}>{col.header}</TableCell>
          ))}
        </TableRow>
      </TableHead>

      <TableBody>
        {data.map((item, i) => (
          <TableRow key={i}>
            {columns.map((col) => (
              <TableCell key={String(col.key)}>
                {col.render ? col.render(item) : String(item[col.key])}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default ReusableTableComponent;
