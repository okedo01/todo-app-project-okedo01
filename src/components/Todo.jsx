import React, { useState } from "react";
import darkIcon from "../assets/images/icon-sun.svg"
import darkTheme from "../assets/images/bg-desktop-dark.jpg"

const Todo = () => {
    const [newTodo, setNewTodo] = useState("");

    const handleInput = (e) => {
        setNewTodo(e.target.value)
    }

    return ( 
        <div style={{
            maxWidth: "500px",
            width: "100%"
        }}>
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                marginBottom: "70px"
            }}>
                <h1 style={{
                    color: "white"
                }}>TODO</h1>
                <img src={darkIcon} />
            </div>
            <form style={{
                background: "black",
                padding: "5px 10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}>
                <input type="checkbox" />
                <input type="text" placeholder="Create a new todo..." value={newTodo} onChange={handleInput} />
            </form>
            
        </div>
     );
}
 
export default Todo;