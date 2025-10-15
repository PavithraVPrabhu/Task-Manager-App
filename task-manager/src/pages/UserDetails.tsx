import React, { useEffect, useState } from "react";
import type { UserFormData } from "../types/UserFormDataType";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Box,
  Link,
} from "@mui/material";
import { useUSPhoneFormat } from "../hooks/useUSPhoneFormat";
import { useApi } from "../hooks/useApi";
interface UserDetailsProps {
  newUsers: UserFormData[];
}

const UserDetails: React.FC<UserDetailsProps> = ({ newUsers }) => {
  const { data: users, loading, error, execute } = useApi<UserFormData[]>();

  const [page, setPage] = useState<number>(1);
  const limit = 5;
  const { formatPhone } = useUSPhoneFormat();
  const allUsers = [...(users || []), ...newUsers];
  const totalPages = Math.ceil(allUsers.length / limit);
  const startIndex = (page - 1) * limit;
  const paginatedUsers = allUsers.slice(startIndex, startIndex + limit);
  useEffect(() => {
    execute("http://localhost:5000/users", "GET");
  }, []);

  return (
    <div style={{ padding: 20, fontFamily: "Arial, sans-serif" }}>
      <h1>User Details</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {!loading && !error && (
        <>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow style={{ backgroundColor: "#f2f2f2" }}>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Phone</TableCell>
                  <TableCell>Address</TableCell>
                  <TableCell>Edit</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {paginatedUsers.map((u, index) => (
                  <TableRow key={index}>
                    <TableCell>{u.name}</TableCell>
                    <TableCell>{u.email}</TableCell>
                    <TableCell>{formatPhone(u.phone)}</TableCell>
                    <TableCell>{u.address}</TableCell>
                    <TableCell>
                      <Link href={`/users/${u.id}`}>Edit</Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Box marginTop={2} display="flex" justifyContent="center" gap={1}>
            <Button
              variant="contained"
              disabled={page === 1}
              onClick={() => setPage((prev) => prev - 1)}
            >
              Previous
            </Button>

            {Array.from({ length: totalPages }, (_, i) => (
              <Button
                key={i + 1}
                variant={page === i + 1 ? "contained" : "outlined"}
                onClick={() => setPage(i + 1)}
              >
                {i + 1}
              </Button>
            ))}

            <Button
              variant="contained"
              disabled={page === totalPages}
              onClick={() => setPage((prev) => prev + 1)}
            >
              Next
            </Button>
          </Box>
        </>
      )}
    </div>
  );
};

export default UserDetails;
