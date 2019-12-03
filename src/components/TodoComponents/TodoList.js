// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo';

import { ListGroup, ListGroupItem, Input, Button } from 'reactstrap';

class TodoList extends React.Component{
    constructor() {
        super();
    }

    handleCleanUp = e => {
        this.props.cleanUp();
    }

    render() {
        return (
            <>
            <ListGroup className="todoList-items">
                {/* <ListGroupItem>
                    <Input type="text" placeholder="Search" />
                </ListGroupItem> */}

                {this.props.listItems.map(item => (
                    <Todo key={item.id} item={item} complete={this.props.complete} />
                ))}
                
                <ListGroupItem>
                    <Button color="danger" size="sm" onClick={this.handleCleanUp}>Clear Completed</Button>
                </ListGroupItem>
            </ListGroup>
            </>
        )
    }
    
}

export default TodoList;
