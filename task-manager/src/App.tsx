import React, { useEffect } from "react";
import AppRoutes from "./routes"
import { ThemeProvider } from "./context/ThemeContext";
import { UserProvider } from "./context/UserContext";

const App: React.FC = () => {
  useEffect(()=>{
    localStorage.removeItem("user");
  },[]
  );
  return (
    <ThemeProvider>
      <UserProvider>
        <AppRoutes />
      </UserProvider>
    </ThemeProvider>
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
