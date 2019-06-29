import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button, Form, FormGroup, Label, Col, Input} from 'reactstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import BookList from './List'
import axios from 'axios';


class Search extends Component {
    state = {
        books: [],
        searchTerm: "",
    }


    handleSave = (event) => {
        this.setState({books: event.target.books})
    }

    handleSearch= () => {
       //only need this.searchterms from state
        axios.get('/api/books')
        .then(res => {           
            console.log(res.data[0].authors);
                         
             this.setState({
                 books: res.data
             })
        })
    }

    render() {
        return(
            <Container>
                 <Form>
                    <FormGroup row>
                    <Label for="searchBar" sm={2}>Title of Book</Label>
                        <Col sm={10}>
                            <Input type="text" name="search" id="searchBar" placeholder="Enter book name!" />
                        </Col>
                    </FormGroup>
                <Button
                    color="dark"
                    stye={{marginBottom: '2rem'}}
                    onClick={() => {
                       this.handleSearch()
                    }}
                >
                    Search
                </Button>
                </Form>
                <br/>
                <div>
                    <BookList onBookList = {this.handleSearch}/>
                </div>
            </Container>
        )
    }
}

export default Search