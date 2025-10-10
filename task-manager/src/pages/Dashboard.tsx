// src/pages/Dashboard.tsx
import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Dashboard = () => {
  const { state: themeState } = useContext(ThemeContext);

  return (
    <div style={{ padding: "20px" , width: "95vw"}}>
      <h1>Dashboard</h1>
      <p>Current theme: <strong>{themeState.theme}</strong></p>
      <p>Toggle the theme using the button in the navbar above.</p>
      
      {/* Your dashboard content here */}
      <div style={{ marginTop: "20px" }}>
        <h2>Welcome to your Dashboard</h2>
        <p>This page automatically reflects the theme changes from the navbar.</p>
      </div>
    </div>
  );
};

export default Dashboard;




// import React, { useContext } from "react";
// import { ThemeContext } from "../context/ThemeContext";

// const Dashboard = () => {
//   const { state: themeState, dispatch: themeDispatch } = useContext(ThemeContext);

//   const toggleTheme = () => {
//     themeDispatch({ type: "TOGGLE_THEME" });
//   };

//   return (
//     <div
//       style={{
//         backgroundColor: themeState.theme === "light" ? "#f9f9f9" : "#222",
//         color: themeState.theme === "light" ? "#000" : "#fff",
//         minHeight: "100vh",
//         padding: "20px",
//          width: "100vw"
//       }}
//     >
//       <h1>Dashboard</h1>
//       <p>Current theme: {themeState.theme}</p>
//       <button onClick={toggleTheme}>Toggle Theme</button>
//     </div>
//   );
// };

// export default Dashboard;
