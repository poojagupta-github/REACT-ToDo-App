import React from 'react'
import {TodoItem} from "../My components/TodoItem";

export const Todos = (props) => {
    let mystyle = {
        minheight:"70vh",
        margin:"10px auto"
    }
    return (
        <div>
            <div className="container my-5" style={mystyle}>
            <h3 className = "my-3">Todo List</h3>
            {props.todos.length===0?"No todos to display":
            props.todos.map((item)=>{
                return(
                    <>
                    <TodoItem obj2 = {item} key={item.sno} onDelete={props.onDelete}/> <hr/>
                    </>
                )
                
            })
            }
            </div>
           
        </div>
    )
}
