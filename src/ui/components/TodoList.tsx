import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import Todo from './Todo'

export default function TodoList(props: InferProps<typeof TodoList.propTypes>) {
  const { todos, toggleTodo } = props
  return (
    <ul className="TodoList">
      {todos.map(todo => (
        <Todo key={todo.id} onClick={() => toggleTodo(todo.id)} {...todo} />
      ))}
    </ul>
  )
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired
}
