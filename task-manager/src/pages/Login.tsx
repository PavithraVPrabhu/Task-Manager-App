import React from 'react'
import { Button, TextField, Paper, Typography, Box ,FormLabel, Link} from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleClick = (event: { preventDefault: () => void; }) => {
    event.preventDefault(); 
    navigate('/dashboard');
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f5f5f5",
        width: "100vw"
      }}
    >
   <Paper elevation={3} sx={{ padding: 4, width: 400, maxWidth: "90vw" }}>

        <Typography variant="h5" gutterBottom align="center">
          Login
        </Typography>

        <form onSubmit={handleClick}>
          <TextField
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            required
          />

          <Button
            variant="contained"
            color="primary"
            type="submit"  
            fullWidth
            sx={{ marginTop: 2 }}
          >
            Login
          </Button>

          <FormLabel>No account yet?</FormLabel>
          <span>
            <Link component={RouterLink} to="/signup" underline="hover">
              Sign up
            </Link>
          </span>
        </form>
      </Paper>
    </Box>
  )
}

export default Login
