import React from "react";
import { Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";

export type Column<T> = {
  key: keyof T;
  header: string;
  render?: (item: T) => React.ReactNode;
};

// interface dummyInterface{
// abc:string,
// id:number
// }

// interface dummyInterface2{
// name:string,
// age:number
// }

// const sample : dummyInterface[]=[
//   {
//     abc:"sddc",
//     id:123
//   }
// ]

// const sample2 : dummyInterface2[]=[
//   {
//     age:10,name:"Test"
//   }
// ]
type TableProps<T> = {
  data: T[];
  columns: Column<T>[];
};
//  const name :TableProps <dummyInterface>={
//   data: sample,
//  }

//  const obj :TableProps <dummyInterface2>={
//   data: sample2,
//  }

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
