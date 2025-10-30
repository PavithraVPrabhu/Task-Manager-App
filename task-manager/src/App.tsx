import React, { useEffect } from "react";
import { QueryClientProvider,QueryClient } from "@tanstack/react-query";
import AppRoutes from "./routes"
import { ThemeProvider } from "./context/ThemeContext";
import { UserProvider } from "./context/UserContext";

const App: React.FC = () => {
  useEffect(()=>{
    localStorage.removeItem("user");
  },[]
  );
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <UserProvider>
        <AppRoutes />
      </UserProvider>
    </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;









// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import routes from "./routes";
// import { ThemeProvider } from "./context/ThemeContext";
// function App() {
//   return (
//     <ThemeProvider>
//     <Router>
//       <Routes>
//         {routes.map((route) => (
//           <Route key={route.path} path={route.path} element={route.element} />
//         ))}
//       </Routes>
//     </Router>
//     </ThemeProvider>
//   );
// }

// export default App;
