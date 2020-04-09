import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Todos from './components/Todos'
import Header from './components/layouts/Header'
import AddTodo from './components/AddTodo'
import { v4 as uuidv4 } from 'uuid'
import About from './components/pages/About'

class App extends Component {

  state = {
    todos: [
      {
        id: uuidv4(),
        title: 'Buang sampah',
        completed: false
      },
      {
        id: uuidv4(),
        title: 'Beli sarapan',
        completed: false
      },
      {
        id: uuidv4(),
        title: 'Joging taman',
        completed: false
      }
    ]
  }

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    })
  }

  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(todo =>
        todo.id !== id)]
    })
  }

  addTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos} markComplete={this.markComplete}
                  delTodo={this.delTodo} />
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    )
  }
}



export default App

