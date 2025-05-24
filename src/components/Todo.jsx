import React, { useState } from "react";
import darkIcon from "../assets/images/icon-sun.svg"
import lightIcon from "../assets/images/icon-moon.svg"
import "../index.css"

const Todo = ({isDarkMode, handleToggleTheme}) => {
    const [newTodo, setNewTodo] = useState("");
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState("All");

const handleInput = (e) => {
    setNewTodo(e.target.value)
}

const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
    if(newTodo.trim() !== "") {
        setTodos([...todos, {text: newTodo.trim(), checked: false}]);
        setNewTodo("");
    }
}

const handleToggle = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].checked = !updatedTodos[index].checked;
    setTodos(updatedTodos);
}

const handleClearCompleted = () => {
    const clearTodo = todos.filter((todo) => !todo.checked);
    setTodos(clearTodo);
}

const clearItems = todos.filter((todo) => !todo.checked).length;

const filteredTodo = todos.filter((todo) => {
    if(filter === "Active") return !todo.checked;
     
    if (filter === "Completed") return todo.checked;
    
        return true;
})

return ( 
    <div style={{
        maxWidth: "400px",
        width: "100%",
    }}>
        <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "20px",
        }}>
            <h1 style={{
                color: "hsl(0, 0%, 98%)",
            }}>TODO</h1>
            <img
                src={isDarkMode ? lightIcon : darkIcon}
                onClick={handleToggleTheme}
                style={{cursor: "pointer"}}
            />
        </div>
        <form onSubmit={handleSubmit} style={{
            padding: "5px 10px",
            display: "flex",
            position: "relative",
            backgroundColor: isDarkMode ? "white" : "hsl(235, 19%, 35%)",
            borderRadius: "3px",
        }}>
            <input type="checkbox" className="custom-checkbox" style={{
                position: "absolute",
                top: "8px",
                left: "20px",
                cursor: "pointer",
                backgroundColor: "transparent", border: isDarkMode ? "1px solid wheat" : "1px solid hsl(237, 14%, 26%)"
            }}/>
            <input style={{
                outline: "none",
                padding: "5px 35px",
                fontSize: "16px",
                width: "100%",
                backgroundColor: isDarkMode ? "hsl(0, 0%, 98%)" : "hsl(235, 19%, 35%)",
                color: isDarkMode ? "hsl(235, 21%, 11%)" : "hsl(0, 0%, 98%)",
                border: "none"
            }} type="text" placeholder="Create a new todo..." value={newTodo} onChange={handleInput} />
        </form>

        <ul className="ordered-list" style={{ 
            backgroundColor: isDarkMode ? "hsl(0, 0%, 98%)" : "hsl(235, 19%, 35%)",
            }}>
            { filteredTodo.map((todo, index) => (
                <li key={index} style={{
                    color: isDarkMode ? "hsl(235, 21%, 11%)" : "hsl(0, 0%, 98%)",
                    borderBottom: "1px solid hsl(235, 21%, 11%)",
                    padding: "10px",
                    listStyle: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                }}>
                    <input type="checkbox" className="custom-checkbox" style={{backgroundColor: todo.checked ? "hsl(220, 98%, 61%)" : "", border: isDarkMode ? "1px solid wheat" : "1px solid hsl(237, 14%, 26%)"}} checked={todo.checked} onChange={() => handleToggle(index)}/>
                    <span style={{
                        textDecoration: todo.checked ? "line-through" : "none"  
                    }}>{ todo.text}</span>
                </li>
            ))}
                <div className="info">
                <p>{clearItems} items left</p>
                <div className="unyama">
                    <p style={{
                    cursor: "pointer",
                    color: filter === "All" ? "hsl(220, 98%, 61%)" : "hsl(235, 21%, 11%)",
                    fontWeight: filter === "All" ? "bold" : "normal"
                }} onClick={() => setFilter("All")}>All</p>
                <p style={{
                    cursor: "pointer",
                    color: filter === "Active" ? "hsl(220, 98%, 61%)" : "hsl(235, 21%, 11%)",
                    fontWeight: filter === "Active" ? "bold" : "normal"
                }} onClick={() => setFilter("Active")}>Active</p>
                <p style={{
                    cursor: "pointer",
                    color: filter === "Completed" ? "hsl(220, 98%, 61%)" : "hsl(235, 21%, 11%)",
                    fontWeight: filter === "Completed" ? "bold" : "normal"
                }} onClick={() => setFilter("Completed")}>Completed</p>
                </div>
                <p style={{cursor: "pointer",}} onClick={handleClearCompleted}>Clear Completed</p>
            </div>
        </ul>
       
    </div>
    );
}
 
export default Todo;