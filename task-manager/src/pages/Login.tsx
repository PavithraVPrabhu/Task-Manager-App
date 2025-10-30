import React, { useState, useEffect } from "react";
import {
  Button,
  TextField,
  Paper,
  Typography,
  Box,
  FormLabel,
  Link,
} from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    setEmail('');
    setPassword('');
  }, []);

  const handleClick = (e: React.FormEvent) => {
    e.preventDefault();

    const storedUser = localStorage.getItem("registeredUser");
    if (!storedUser) {
      alert("No user found. Please sign up first.");
      return;
    }

    const user = JSON.parse(storedUser);

    if (email === user.email && password === user.password) {
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/dashboard");
    } else {
      alert("Invalid credentials. Try again.");
    }
  };

  return (
    <div style={{width: "95vw"}}>
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Paper elevation={3} sx={{ padding: 4, width: 400 }}>
        <Typography variant="h5" gutterBottom align="center">
          Login
        </Typography>

        <form autoComplete="off" onSubmit={handleClick}>
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            margin="normal"
            required
            autoComplete="off"

          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            margin="normal"
            required
            autoComplete="off"

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

          <FormLabel sx={{ marginTop: 2 }}>No account yet?</FormLabel>
          <Link component={RouterLink} to="/signup" underline="hover" sx={{ ml: 1 }}>
            Sign up
          </Link>
        </form>
      </Paper>
    </Box>
    </div>
  );
};

export default Login;






// import React from 'react'
// import { Button, TextField, Paper, Typography, Box ,FormLabel, Link} from "@mui/material";
// import { Link as RouterLink, useNavigate } from "react-router-dom";

// const Login = () => {
//   const navigate = useNavigate();

//   const handleClick = (event: { preventDefault: () => void; }) => {
//     event.preventDefault();
//     navigate('/dashboard');
//   };

//   return (
//     <Box
//       sx={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         height: "100vh",
//         backgroundColor: "#f5f5f5",
//         width: "100vw"
//       }}
//     >
//    <Paper elevation={3} sx={{ padding: 4, width: 400, maxWidth: "90vw" }}>

//         <Typography variant="h5" gutterBottom align="center">
//           Login
//         </Typography>

//         <form onSubmit={handleClick}>
//           <TextField
//             label="Email"
//             type="email"
//             fullWidth
//             margin="normal"
//             required
//           />
//           <TextField
//             label="Password"
//             type="password"
//             fullWidth
//             margin="normal"
//             required
//           />

//           <Button
//             variant="contained"
//             color="primary"
//             type="submit"
//             fullWidth
//             sx={{ marginTop: 2 }}
//           >
//             Login
//           </Button>

//           <FormLabel>No account yet?</FormLabel>
//           <span>
//             <Link component={RouterLink} to="/signup" underline="hover">
//               Sign up
//             </Link>
//           </span>
//         </form>
//       </Paper>
//     </Box>
//   )
// }

// export default Login
