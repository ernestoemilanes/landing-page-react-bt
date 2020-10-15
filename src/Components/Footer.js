import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
class MyFooter extends Component {
    render() {
        return (
            <div>
                <Card className="text-center text-white">
                    <Card.Body className='bg-dark'>
                        <Card.Text className="font-weight-bold">
                            Copyright © React Bootstrap 2020
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default MyFooter;