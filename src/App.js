import React from 'react';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

import './components/TodoComponents/Todo.css';

import { Container, Col } from 'reactstrap'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todoList: []
    }
  }

  componentDidMount() {
    const isTasks = localStorage.getItem('data') !== null;
    const taskList = isTasks ? JSON.parse(localStorage.getItem('data')) : [];
    this.setState({todoList: taskList})
  }

  componentDidUpdate() {
    localStorage.setItem('data', JSON.stringify(this.state.todoList))
  }

  addTask = newTodoTitle => {
    if(!newTodoTitle) return false;
    const newTask = {
      task: newTodoTitle,
      id: Date.now(),
      completed: false
    }
    this.setState({ todoList: [...this.state.todoList, newTask]})
  }
  
  completeTask = todo => {
    const tempArray = this.state.todoList;
    const findTask = tempArray.findIndex(({ id }) => {return id === todo})

    tempArray[findTask].completed = (this.state.todoList[findTask].completed === true) ? false : true

    this.setState({todoList: tempArray})
  }

  clearCompleted = () => {
    const incompleteTasks = this.state.todoList.filter(task => !task.completed)
    this.setState({ todoList: incompleteTasks})
  }

  render() {
    return (
      <Container>
        <Col xs="12" md={{size: 6, offset: 3}}>
          <h2>Start your Todos!</h2>
          <div>
            <TodoForm addTask={this.addTask} />
          </div>
          <div>
            <TodoList listItems={this.state.todoList} complete={this.completeTask} cleanUp={this.clearCompleted} />
          </div>
        </Col>
      </Container>
    );
  }
}

export default App;
