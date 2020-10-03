import React, { Component } from 'react'

class TodoInput extends Component {
    state = {
        title: ''
    }
    onChange = (e) => {
        //   console.log("hello")
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleSubmit =(e)=>
    {
     e.preventDefault();  
     this.props.addItemProps(this.state.title) ;
     this.setState({
         title:''
     })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit} className='form-container'>
                <input type="text" placeholder="Add Todo..." value={this.state.title} name="title"
                onChange={this.onChange} />
                <input type="submit" value="Submit" />
            </form>
        )
    }
}
export default TodoInput;