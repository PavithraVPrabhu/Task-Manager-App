import React, { useContext } from "react";
import type { ReactNode } from "react";
import Navbar from "./NavBar"
import { ThemeContext } from "../../context/ThemeContext";

const MainLayout = ({ children }: { children: ReactNode }) => {
  const { state: themeState } = useContext(ThemeContext);
  const isDark = themeState.theme === "dark";

  return (
    <div 
      style={{ 
        display: "flex", 
        flexDirection: "column", 
        minHeight: "100vh",
        backgroundColor: isDark ? "#1a1a1a" : "#f9f9f9",
        color: isDark ? "#fff" : "#000",
        transition: "background-color 0.3s ease, color 0.3s ease"
      }}
    >
      <Navbar />  
      <main 
        style={{ 
          flex: 1, 
          padding: "20px",
          backgroundColor: isDark ? "#222" : "#fff",
          transition: "background-color 0.3s ease"
        }}
      >
        {children}
      </main>
    </div>
  );
};

export default MainLayout;



