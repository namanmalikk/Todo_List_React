import React from 'react'

export const TodoItem = (props) => {
    return (
        <div>
            <div className="container card w-75 my-3">
                <div className="card-body ">
                    <h5 className="card-title">{props.todos.title}</h5>
                    <p className="card-text">{props.todos.content}</p>
                    <a onClick={() => props.deleteTodo(props.todos)} className="btn btn-sm btn-danger">Delete</a>
                </div>
            </div>
        </div>
    )
}
