import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Card, CardContent, Typography } from "@mui/material";
import {useQuery} from "@tanstack/react-query";
const Dashboard = () => {
  const { state: themeState } = useContext(ThemeContext);
  const { isPending, error, data } = useQuery({
    queryKey: ['todos'],
    queryFn: () =>
      fetch('https://dummyjson.com/todos').then((res) =>
        res.json(),
      ),
  })

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message
  return (
    <div style={{ padding: "20px", width: "95vw" }}>
      <h2>Dashboard</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '48px'
      }}>
        {data?.todos?.map((todo:any) => (
          <Card key={todo.id} sx={{ borderRadius: 2, boxShadow: 3 }}>
            <CardContent>
              
              <Typography variant="h6"> {todo.userId}</Typography>
              <Typography variant="body2">{todo.todo}</Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
























// import React, { useContext } from "react";
// import { ThemeContext } from "../context/ThemeContext";
// import { Card, CardContent, Typography } from "@mui/material";
// import Grid from "@mui/material/Grid";
// const Dashboard = () => {
//   const { state: themeState } = useContext(ThemeContext);

//   return (
//     <div style={{ padding: "20px" , width: "95vw"}}>
//       <h2>Dashboard</h2>
      
//    <Grid container spacing={6}>
//       {[1, 2, 3, 4].map((item) => (
//         <Grid item xs={12} sm={6} md={3} key={item}>
//           <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
//             <CardContent>
//               <Typography variant="h6">Card {item}</Typography>
//               <Typography variant="body2">Some description...</Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//       ))}
//     </Grid>
//     </div>
//   );
// };

// export default Dashboard;




