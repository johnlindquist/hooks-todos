import { useState } from "react"
import { compose } from "./helpers"

let add = todo => todos => [...todos, todo]
let remove = id => todos =>
  todos.filter(todo => todo.id != id)

export let useTodos = initialTodos => {
  let [todos, setTodos] = useState(initialTodos)
  let [current, setCurrentTodo] = useState("")

  let setCurrent = e => setCurrentTodo(e.target.value)

  let removeTodo = compose(
    fn => e => setTodos(fn),
    remove
  )

  let addTodo = compose(
    x => {
      setCurrentTodo("")
      return x
    },
    setTodos,
    e =>
      add({
        name: current,
        done: false,
        id: Math.random()
      })
  )

  return {
    todos,
    current,
    addTodo,
    removeTodo,
    setCurrent
  }
}
