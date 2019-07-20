import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button, Form, FormGroup, Label, Col, Input} from 'reactstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import BookList from '../components/List'
import axios from 'axios';


class Search extends Component {
    state = {
        books: [],
        searchTerm: "",
    }


    handleSave = (event) => {
        this.setState({books: event.target.books})
    }

    handleSearch= (event) => {
        this.setState({
            searchTerm : event.target.value
        })
        console.log(this.state.searchTerm); 
    }

    handleSearchGo = () => {  
        const api = 'https://www.googleapis.com/books/v1/volumes?q='
        const searchBook = this.state.searchTerm
        const apiSearch = api + searchBook
        console.log(apiSearch);
        
        fetch(apiSearch, {method: 'GET'})
        .then(res =>res.json())
        .then(json=>          
            console.log(json)
        )
    }

    render() {
        return(
            <Container>
                 <Form>
                    <FormGroup row>
                    <Label for="searchBar" sm={2}>Title of Book</Label>
                        <Col sm={10}>
                            <Input type="text" name="search" id="searchBar" placeholder="Enter book name!" value={this.state.searchTerm} onChange={(e) => this.handleSearch(e)} />
                        </Col>
                    </FormGroup>
                    <Button
                        color="dark"
                        stye={{marginBottom: '2rem'}}
                        onClick={() => {
                        this.handleSearchGo()
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