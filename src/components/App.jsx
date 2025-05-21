import Todo from "./todo"
import bgImg from "../assets/images/bg-desktop-dark.jpg"
import "../App.css"
import { useState } from "react"

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleToggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  }

  return (
     <div style={{
      backgroundImage: `url(${bgImg})`,
      margin: 0,
      padding: 0,
      boxSizing: "border-box",
      height: "200px",
      display: "grid",
      placeItems: "center",
    }}>
       <Todo isDarkMode = {isDarkMode} handleToggleTheme = {handleToggleTheme} />
    </div>
  )
}

export default App
