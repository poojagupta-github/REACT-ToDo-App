import React from 'react'

export const TodoItem = ({obj2 ,onDelete}) => {
    return (
        <div>
           <h4>{obj2.title}</h4>
           <p>{obj2.desc}</p>
            <button className="btn btn-sm btn-danger" onClick={ () =>{onDelete(obj2)}}>Delete</button>
        </div>
    )
}
