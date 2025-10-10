import React from 'react'
import { Button, TextField, Paper, Typography, Box, FormControl, FormLabel, Link } from "@mui/material";
const SignUp = () => {
    return (
        <div>
            <Box sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                backgroundColor: "#f5f5f5",
            }}>
                <Paper elevation={3} sx={{ padding: 4, width: 300 }}>
                    <Typography>  Sign Up</Typography>
                    <form>
                        <TextField
                            label="Name"
                            type="email"
                            fullWidth
                            margin="normal"
                            required
                        />
                        <TextField
                            label="Email"
                            type="password"
                            fullWidth
                            margin="normal"
                            required
                        /> <TextField
                            label="Address"
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
                        <Button variant="contained"
                            color="primary"
                            type="submit"
                            fullWidth
                            sx={{ marginTop: 2 }}>Sign up </Button>
                    </form>

                </Paper>

            </Box>

        </div>
    )
}

export default SignUp
