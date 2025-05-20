import Todo from "./todo"
import bgImg from "../assets/images/bg-desktop-dark.jpg"
import "../App.css"

function App() {

  return (
     <div style={{
      backgroundImage: `url(${bgImg})`,
    }}>
       <Todo />
    </div>
  )
}

export default App
