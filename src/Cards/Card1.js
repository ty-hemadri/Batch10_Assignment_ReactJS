import React, { Component } from "react";
import { CardDeck, Card, Container, Row,Col,Badge } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './box.css'
export default class Card1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title1:"Karnataka Lockdown:",
      text1:"Looking at the rising cases of coronavirus cases, the Chikkamagaluru and Haveri districts on Thursday ",
      
      title2:"Tamil Nadu Issues Fresh Lockdown Guidelines:",
      text2:"To contain the spread of the virus further, the Tamil Nadu government on Friday issued a fresh set of guidelines.",

      title3:"China Builds Key Highway Through Brahmaputra",
      text3:" China has completed the construction of a strategic highway through the Brahmaputra Canyon.",
      
      title4:"Haryana Lockdown:",
      text4:" The ongoing farmers’ protest in Haryana intensified after May 16 incident when the locals Majra village on Thursday.",
    };
  }
  render() {
    return (
      <div className="edit">
        <Container>
        <Row>
          <Col >
            <Card style={{ width: "18rem" }}>
           
              <Card.Body>
                <h3 className="h3">
              <Badge variant="warning">News</Badge></h3>
                <Card.Title>{this.state.title1}</Card.Title>
                <Card.Text>
                  {this.state.text1}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col >
            <Card style={{ width: "18rem" }}>
              <Card.Body>
              <h3 className="h3">
              <Badge variant="primary">News</Badge></h3>
                <Card.Title>{this.state.title2}</Card.Title>
                <Card.Text>
                {this.state.text2}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          </Row><br/>
          <Row>
          <Col >
            <Card style={{ width: "18rem" }}>
              <Card.Body>
              <h3 className="h3">
              <Badge variant="success">News</Badge></h3>
                <Card.Title>{this.state.title3}</Card.Title>
                <Card.Text>
                {this.state.text3}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col >
            <Card style={{ width: "18rem" }}>
              <Card.Body>
              <h3 className="h3">
              <Badge variant="danger">News</Badge></h3>
                <Card.Title>{this.state.title4}</Card.Title>
                <Card.Text>
                {this.state.text4}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        </Container>
      </div>
    );
  }
}
