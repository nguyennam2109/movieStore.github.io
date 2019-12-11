import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardDeck } from 'react-bootstrap';
class productItems extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { items } = this.props;
        console.log(items)
        return (
            <>
                {items.map((item, idx) => (
                    <Card className="col-md-4" id={item.product_id} key={idx}>
                        <Card.Img variant="top" src={item.img_url} />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>

                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                ))}

            </>
        );
    }
}
export default connect()(productItems);
