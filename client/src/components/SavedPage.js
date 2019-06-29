import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import axios from 'axios';



class Saved extends Component {

    state={
        books: []
    }
    componentWillMount() {
        axios.get('/api/books')
        .then(res => {           
            console.log(res.data);
                         
             this.setState({
                 books: res.data
             })
        })
    }

    render() {
        return(
            <Container>
                <div>
                    {this.state.books.map(book=> {
                        return(
                            <h3 key={book._id}>{book.authors}</h3>
                        )
                    })}
                </div>
            </Container>
        )
    }
}

export default Saved