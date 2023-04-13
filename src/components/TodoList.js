import React from 'react'

const Todos = [
    { name: "sleeping", isDone: true },
    { name: "eating", isDone: false },
    { name: "instagram", isDone: true },
    { name: "playing", isDone: false }
]
const TodoList = () => {
    return (
        <div>
            <ul>
                {
                    Todos.map((todo) => {
                      return <li>{todo.name}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default TodoList