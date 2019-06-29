import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button, Form, FormGroup, Label, Col, Input} from 'reactstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group';


class Search extends Component {
    state = {
        books: [],
        searchTerm: ""
    }


    handleSave = () => {

    }

    handleSearch= () => {

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
                <div>
                    
                </div>
            </Container>
        )
    }
}

export default Search