import Todo from "./todo"
import bgImg from "../assets/images/bg-desktop-dark.jpg"

function App() {

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
       <Todo />
    </div>
  )
}

export default App
