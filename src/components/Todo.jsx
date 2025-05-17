import React, { useState } from "react";
import darkIcon from "../assets/images/icon-sun.svg"
import darkTheme from "../assets/images/bg-desktop-dark.jpg"

const Todo = () => {
    const [newTodo, setNewTodo] = useState("");
    const [todos, setTodos] = useState([]);

const handleInput = (e) => {
    setNewTodo(e.target.value)
}

const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
    if(newTodo.trim() !== "") {
        setTodos([...todos, {text: newTodo.trim()}]);
    }
    setNewTodo("");
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
        <form onSubmit={handleSubmit} style={{
            background: "",
            padding: "5px 10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative"
        }}>
            <input type="checkbox" style={{
                position: "absolute",
                top: "13px",
                left: "20px",
                border: "10px",
                borderRadius: "50%",
                cursor: "pointer"
            }}/>
            <input style={{
                outline: "none",
                width: "100%",
                padding: "7px 35px",
                fontSize: "16px",
            }} type="text" placeholder="Create a new todo..." value={newTodo} onChange={handleInput} />
        </form>

        <ul>
            { todos.map((todo, index) => (
                <li key={index}>
                    <input type="checkbox" />
                    <span>{ todo.text}</span>
                    <button>DELETE</button>
                </li>
            ))}
        </ul>
        
    </div>
    );
}
 
export default Todo;