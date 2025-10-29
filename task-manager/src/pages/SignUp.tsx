import React, { useState } from "react";
import { Button, TextField, Paper, Typography, Box, Link } from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newUser = { name, email, address, password };
    localStorage.setItem("registeredUser", JSON.stringify(newUser));
    alert("Sign up successful! Please log in.");
    navigate("/login");
  };

  return (
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
          Sign Up
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Address"
            type="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
            Sign Up
          </Button>

          <Typography align="center" sx={{ marginTop: 2 }}>
            Already have an account?{" "}
            <Link component={RouterLink} to="/login" underline="hover">
              Log in
            </Link>
          </Typography>
        </form>
      </Paper>
    </Box>
  );
};

export default SignUp;



// import React from 'react'
// import { Button, TextField, Paper, Typography, Box, FormControl, FormLabel, Link } from "@mui/material";
// const SignUp = () => {
//     return (
//         <div>
//             <Box sx={{
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 height: "100vh",
//                 backgroundColor: "#f5f5f5",
//             }}>
//                 <Paper elevation={3} sx={{ padding: 4, width: 300 }}>
//                     <Typography>  Sign Up</Typography>
//                     <form>
//                         <TextField
//                             label="Name"
//                             type="email"
//                             fullWidth
//                             margin="normal"
//                             required
//                         />
//                         <TextField
//                             label="Email"
//                             type="password"
//                             fullWidth
//                             margin="normal"
//                             required
//                         /> <TextField
//                             label="Address"
//                             type="email"
//                             fullWidth
//                             margin="normal"
//                             required
//                         />
//                         <TextField
//                             label="Password"
//                             type="password"
//                             fullWidth
//                             margin="normal"
//                             required
//                         />
//                         <Button variant="contained"
//                             color="primary"
//                             type="submit"
//                             fullWidth
//                             sx={{ marginTop: 2 }}>Sign up </Button>
//                     </form>

//                 </Paper>

//             </Box>

//         </div>
//     )
// }

// export default SignUp
