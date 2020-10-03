import React from "react"
import TodoList from './TodoList'
import Header from './TodoHeader'
import TodoInput from './TodoInput'
 import './App.css'

class TodoContainer extends React.Component {
    state =
        {
            todos: [
                {
                    id: 1,
                    title: 'setup is done',
                    complete: false
                },
                {
                    id: 2,
                    title: 'setup is done twice',
                    complete: false
                },
                {
                    id: 3,
                    title: 'setup is done thrice',
                    complete: false
                }
            ]
        }
        handleChange = (id) => {
            // console.log("clicked",id);
            this.setState({
              todos:this.state.todos.map(todo=>
              {
                 if(todo.id===id)
                 {
                     todo.complete=!todo.complete;
                 }
                 return todo;
              })
            })
          };
        
        delItem = (id)=>
        {
            // console.log("clicked",id)
            this.setState({
                todos:[
                    ...this.state.todos.filter(todo =>
                        {
                            if(todo.id!=id)
                            {
                                return todo;
                            }
                        })
                ]
            })
        }
        addItem = (title)=>
        {
            const New={
                id:4,
                title:title,
                complete:false
            };
            this.setState({
               todos: [...this.state.todos,New]
            })
        }
   
    render() {
        return (
            <div className="container">
                <Header />
                <TodoInput addItemProps={this.addItem}/>
                <TodoList todos={this.state.todos} handleChangeProps={this.handleChange}
                delItemProps={this.delItem} />
            </div>

        )
    }
}
export default TodoContainer