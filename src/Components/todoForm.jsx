import React, { useState } from 'react'

export const TodoForm = (props) => {
    let myStyle = {
        width: "50%"
    }
    const [title, settitle] = useState("")
    const [content, setcontent] = useState("")
    const submitForm = (e) => {
        e.preventDefault(); props.addTodo(title, content); settitle("")
        setcontent("")
    }
    return (
        <div className="container mx-auto" style={myStyle}>
            <h3 className="my-2 text-center">Add New Todo</h3>
            <form onSubmit={submitForm} >
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input value={title} onChange={(e) => settitle(e.target.value)} type="text" className="form-control" id="title" />
                </div>
                <div className="mb-3">
                    <label htmlFor="content" className="form-label">Content</label>
                    <input value={content} onChange={(e) => setcontent(e.target.value)} type="text" className="form-control" id="content" />
                </div>
                <div className="mx-auto">
                    <button type="submit" className="btn btn-primary">Add</button>
                </div></form>
        </div >
    )
}
