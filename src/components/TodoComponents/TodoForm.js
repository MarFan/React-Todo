import React from 'react';

import { Form, Input, InputGroup, InputGroupAddon, Button, ButtonGroup } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            newTask: ''
        }
    }

    handleChange = e => {
        this.setState({newTask: e.target.value});
    }

    handleCleanUp = e => {
        this.props.cleanUp();
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addTask(this.state.newTask)
        this.setState({ newTask: ''});
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <InputGroup>
                    <Input type="text" placeholder="New Task..." value={this.state.newTask} onChange={this.handleChange} />
                    <InputGroupAddon addonType="append">
                        <Button color="primary" type="submit"><FontAwesomeIcon icon={faPlus} /> Add Task</Button>
                    </InputGroupAddon>
                </InputGroup>
                
                {/* <ButtonGroup>
                    <Button color="primary" type="submit">Add Task</Button>
                    <Button color="danger" type="button" onClick={this.handleCleanUp}>Clear Completed</Button>
                </ButtonGroup> */}
            </Form>
        )
    }
}

export default TodoForm;