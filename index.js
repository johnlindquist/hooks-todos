import React from "react"
import { render } from "react-dom"
import { preventDefault } from "./helpers"
import { useTodos } from "./useTodos"

let initialTodos = [
  { name: "Eat", done: false, id: 0 },
  { name: "Sleep", done: false, id: 1 },
  { name: "Code", done: false, id: 2 }
]

let App = () => {
  let {
    todos,
    current,
    addTodo,
    removeTodo,
    setCurrent
  } = useTodos(initialTodos)

  return (
    <div>
      <ul>
        {todos.map(todo => (
          <li>
            <span>{todo.name}</span>

            <button onClick={removeTodo(todo.id)}>
              x
            </button>
          </li>
        ))}
      </ul>
      <form action="" onSubmit={preventDefault}>
        <input
          type="text"
          value={current}
          onChange={setCurrent}
        />
        <input
          type="submit"
          label="Add Todo"
          onClick={addTodo}
        />
      </form>
    </div>
  )
}

render(<App />, document.getElementById("app"))
