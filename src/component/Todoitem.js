import React from "react"

class TodoItem extends React.Component {
  render() {
    return(

    <li className='todo-item'><input type="checkbox" checked={this.props.todo.complete} 
    onChange={() => this.props.handleChangeProps(this.props.todo.id)} />
    {this.props.todo.title}
    <button onClick={()=>this.props.delItemProps(this.props.todo.id)}>Delete</button></li>
    )
  }
}

export default TodoItem