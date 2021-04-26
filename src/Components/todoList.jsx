import React from 'react'
import { TodoItem } from "./todoItem"

export const TodoList = (props) => {
    return (
        <div className="row">
            <div className="col">
                <h2 className="text-center my-2">My Todo List</h2>
                <div className="container">
                    {props.todos.map((e) => (
                        <TodoItem todos={e} deleteTodo={props.deleteTodo} key={e.id} />
                    ))}
                </div>
            </div>
        </div>
    )
}
