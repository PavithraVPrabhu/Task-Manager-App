// src/components/layout/Navbar.tsx
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { state: themeState, dispatch: themeDispatch } = useContext(ThemeContext);

  const handleLogout = () => {
    localStorage.removeItem("user"); 
    navigate("/login");              
  };

  const toggleTheme = () => {
    themeDispatch({ type: "TOGGLE_THEME" });
  };

  const isDark = themeState.theme === "dark";

  return (
    <nav style={{
      display: "flex",
      gap: "20px",
      padding: "10px 20px",
      backgroundColor: isDark ? "#333" : "#eee",
      alignItems: "center",
      justifyContent: "space-between",
      transition: "background-color 0.3s ease"
    }}>
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <Link 
          to="/dashboard" 
          style={{ 
            color: isDark ? "#fff" : "#000",
            textDecoration: "none"
          }}
        >
          Dashboard
        </Link>
        <Link 
          to="/boardDetails"
          style={{ 
            color: isDark ? "#fff" : "#000",
            textDecoration: "none"
          }}
        >
          Board details
        </Link>
        <Link 
          to="/settings"
          style={{ 
            color: isDark ? "#fff" : "#000",
            textDecoration: "none"
          }}
        >
          Settings
        </Link>
      </div>

      <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
        {/* Theme Toggle Button */}
        <button 
          onClick={toggleTheme}
          style={{
            padding: "8px 16px",
            backgroundColor: isDark ? "#555" : "#ddd",
            color: isDark ? "#fff" : "#000",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            transition: "all 0.3s ease"
          }}
          title={`Switch to ${isDark ? "light" : "dark"} mode`}
        >
          {isDark ? "🌞" : "🌙"}
          <span>{isDark ? "Light" : "Dark"}</span>
        </button>

        {/* Logout Button */}
        <button 
          onClick={handleLogout}
          style={{
            padding: "8px 16px",
            backgroundColor: isDark ? "#dc3545" : "#ff4444",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            transition: "background-color 0.3s ease"
          }}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;




// // src/components/layout/Navbar.tsx
// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// const Navbar = () => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("user"); 
//     navigate("/login");              
//   };

//   return (
//     <nav style={{
//       display: "flex",
//       gap: "20px",
//       padding: "10px 20px",
//       backgroundColor: "#eee",
//       alignItems: "center"
//     }}>
//       <Link to="/dashboard">Dashboard</Link>
//       <Link to="/boardDetails">Board details</Link>
//       <Link to="/settings">Settings</Link>
//       <button onClick={handleLogout}>Logout</button>
//     </nav>
//   );
// };

// export default Navbar;
