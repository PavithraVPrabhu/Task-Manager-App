import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Card, CardContent, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
const Dashboard = () => {
  const { state: themeState } = useContext(ThemeContext);

  return (
    <div style={{ padding: "20px" , width: "95vw"}}>
      <h2>Dashboard</h2>
      
   <Grid container spacing={6}>
      {[1, 2, 3, 4].map((item) => (
        <Grid item xs={12} sm={6} md={3} key={item}>
          <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6">Card {item}</Typography>
              <Typography variant="body2">Some description...</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
    </div>
  );
};

export default Dashboard;




