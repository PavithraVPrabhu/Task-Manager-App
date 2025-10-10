import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
const BoardDetails = () => {

  const {state:themeState,dispatch:themeDispatch}=useContext(ThemeContext)
   const toggleTheme = () => {
    themeDispatch({ type: "TOGGLE_THEME" });
  };
  return (
    <div style={{
        backgroundColor: themeState.theme === "light" ? "#f9f9f9" : "#222",
        color: themeState.theme === "light" ? "#000" : "#fff",
        minHeight: "100vh",
        padding: "20px",
        width: "95vw"
      }}>
      <h1>Board Details</h1>
      <p>Current theme: {themeState.theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  )
}

export default BoardDetails
