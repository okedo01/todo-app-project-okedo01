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


return ( 
    <div style={{
        maxWidth: "500px",
        width: "100%",
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
            position: "relative",
        }}>
            <input type="checkbox" style={{
                position: "absolute",
                top: "13px",
                left: "20px",
                border: "10px",
                borderRadius: "50%",
                cursor: "pointer",
            }}/>
            <input style={{
                outline: "none",
                width: "100%",
                padding: "7px 35px",
                fontSize: "16px",
            }} type="text" placeholder="Create a new todo..." value={newTodo} onChange={handleInput} />
        </form>

        <ul style={{background: "black",}}>
            { todos.map((todo, index) => (
                <li key={index} style={{
                    color: "white",
                    borderBottom: "1px solid yellow",
                    padding: "10px",
                    listStyleType: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px"
                }}>
                    <input type="checkbox" style={{cursor: "pointer"}} checked={todo.checked} onChange={() => handleToggle(index)}/>
                    <span style={{
                        textDecoration: todo.checked ? "line-through" : "none"  
                    }}>{ todo.text}</span>
                </li>
            ))}
                <div style={{
                color: "white",
                display: "flex",
                justifyContent: "space-between",

            }}>
                {/* <p><span style={{paddingRight: "5px"}}>{clearItems}</span>items left</p> */}
                <p>{clearItems} item{clearItems !== 1 ? "s" : ""} left</p>
                <p>All</p>
                <p>Active</p>
                <p><span style={{paddingRight: "5px"}}>{todos.length}</span>Completed</p>
                <p style={{cursor: "pointer",}} onClick={handleClearCompleted}>Clear Completed</p>
            </div>
        </ul>
       
    </div>
    );
}
 
export default Todo;