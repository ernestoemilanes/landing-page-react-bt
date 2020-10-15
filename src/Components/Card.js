import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';


class MyCard extends Component {
    render() {
        return (
            <div>
                <Card className="mt-0 text-center" style={{ width: '15rem' }}>
                    <Card.Img variant="top" src="https://picsum.photos/200" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>
        );
    }
};

export default MyCard;