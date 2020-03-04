import React from 'react'
import PropTypes, { InferProps } from 'prop-types'

export default function Todo(props: InferProps<typeof Todo.propTypes>) {
  const { onClick, completed, text } = props

  return (
    <li
      onClick={onClick}
      className="Todo"
      style={{ textDecoration: completed ? 'line-through' : 'none' }}
    >
      {text}
    </li>
  )
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}
