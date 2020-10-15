//! Import the React and ReactDOM libraries.
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyCard from './Components/Card';
import MyNavbar from './Components/Navbar';
import MyJumbotron from './Components/Jumbotron';
import MyFooter from './Components/Footer';
import { Row, Col, Container } from 'react-bootstrap';

//! Create a react component.
const App = () => {
        return (
            <>
                <MyNavbar />
                <Container>
                    <MyJumbotron />
                    <Row>
                        <Col><MyCard /></Col>
                        <Col><MyCard /></Col>
                        <Col><MyCard /></Col>
                        <Col><MyCard /></Col>
                    </Row>
                </Container>
                <MyFooter />
             
            </>
        )
 
};


//! Take the react component and show it on the screen.
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);