import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './counter.css';


export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };
  reset = () => {
    this.setState({ count: 0 });
  };
  render() {
    return (
      <div className="center" >
        
        <h2 className="text">{this.state.count}</h2><br></br>
        <Button variant="success" onClick={this.increment} className="counter">
          +button
        </Button>
        {"  "}
        <Button variant="primary" onClick={this.reset} className="counter">
          Reset
        </Button>
        {"  "}
        <Button variant="danger" onClick={this.decrement} className="counter">
          -button
        </Button>
      </div>
    );
  }
}
