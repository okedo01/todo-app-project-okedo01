import Todo from "./TodoApp"
import darkTheme from "../assets/images/bg-desktop-dark.jpg"
import lightTheme from "../assets/images/bg-desktop-light.jpg"
import "../App.css"
import { useEffect, useState } from "react"

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleToggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  }

  useEffect(() => {
    document.body.style.backgroundColor = isDarkMode ? "hsl(0, 0%, 98%)" : "hsl(237, 14%, 26%)" ;
  }, [isDarkMode])

  const appStyle = {
    backgroundImage: `url(${isDarkMode ? lightTheme : darkTheme})`,
    display: "grid",
    placeItems: "center",
    height: "200px"
  }
  return (
     <div style={appStyle}>
       <Todo isDarkMode = {isDarkMode} handleToggleTheme = {handleToggleTheme} />
       <div className="copyright">
        <footer>Created by <a href="https://github.com/okedo01/todo-app-project-okedo01" target="_blank">Eliah</a> &copy;right 2025</footer>
       </div>
    </div>
  )
}

export default App
