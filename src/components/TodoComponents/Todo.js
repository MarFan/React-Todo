import React from 'react';

import { ListGroupItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faClock, faCheckSquare} from '@fortawesome/free-solid-svg-icons';
import {faSquare} from '@fortawesome/free-regular-svg-icons';

class Item extends React.Component {
    constructor() {
        super();
        this.state = {
            taskIcon: 'faSquare'
        }
    }

    componentDidUpdate() {
        //console.log(this.props.item)
        //this.setState({taskIcon: (this.props.item.completed === true) ? 'faCheckSquare' : 'faSquare'})
    }

    iconHandler = e => {
        //this.setState({taskIcon: (this.props.completed) ? faCheckSquare : faSquare})
        this.props.complete(this.props.item.id)
    }

    render() {
        return (
            <>
                <ListGroupItem className={`${this.props.item.completed ? 'completed' : ''}`} onClick={this.iconHandler}>
                    <FontAwesomeIcon icon={faSquare} />
                    {this.props.item.task}
                </ListGroupItem>
            </>
        )
    }
    
}

export default Item;