import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes"
import { ThemeProvider } from "./context/ThemeContext";

const App: React.FC = () => {
  return (
  <ThemeProvider>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
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
