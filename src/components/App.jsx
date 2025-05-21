import Todo from "./todo"
import darkTheme from "../assets/images/bg-desktop-dark.jpg"
import lightTheme from "../assets/images/bg-desktop-light.jpg"
// import "../App.css"
import { useState } from "react"

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleToggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  }

  const appStyle = {
    backgroundImage: `url(${isDarkMode ? lightTheme : darkTheme})`,
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    display: "grid",
    placeItems: "center",
  }
  return (
     <div style={appStyle}>
       <Todo isDarkMode = {isDarkMode} handleToggleTheme = {handleToggleTheme} />
    </div>
  )
}

export default App
