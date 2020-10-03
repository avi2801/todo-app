

import React from "react"
import TodoItem from './Todoitem'

class TodosList extends React.Component {
  render() {
    return (
      <div>
        {this.props.todos.map(todo => (
         <TodoItem key={todo.id} todo={todo} 
         handleChangeProps={this.props.handleChangeProps}
         delItemProps={this.props.delItemProps}
        />
        ))}
      </div>
    )
  }
}

export default TodosList;