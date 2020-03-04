import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import { toggleTodo } from '../../state/actions'
import { TodoApp, Todo, VisibilityFilter } from '../../state/types/state'

/**
 * Applies a viewing filter to a list of todos.
 *
 * @param todos The entire list of todos.
 * @param filter The filter that should be applied to the list.
 */
const getVisibleTodos = (todos: Todo[], filter: VisibilityFilter): Todo[] => {
  switch (filter) {
    case VisibilityFilter.SHOW_ALL:
      return todos
    case VisibilityFilter.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed)
    case VisibilityFilter.SHOW_COMPLETED:
      return todos
        .filter(todo => todo.completed)
        .map(todo => ({
          ...todo,
          // If we leave this true, then all the visible todos will have lines
          // through them.
          completed: false
        }))
    default:
      throw new Error(`Unidentified filter: ${filter}`)
  }
}

export default connect(
  (state: TodoApp) => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }),
  dispatch => ({
    toggleTodo: (id: number) => dispatch(toggleTodo(id))
  })
)(TodoList)
