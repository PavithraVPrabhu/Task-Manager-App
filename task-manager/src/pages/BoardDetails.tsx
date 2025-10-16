import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import DragAndDrop from '../components/layout/DragAndDrop'
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
      <h2><b>Board Details</b></h2>
      <DragAndDrop></DragAndDrop>
    </div>
  )
}

export default BoardDetails
