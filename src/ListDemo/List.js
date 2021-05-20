import React, { Component } from 'react'
import { ListGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './list.css';
import Image from 'react-bootstrap/Image'
export default class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name1:"John",
            name2:"Petter",
            name3:"Henry",
            name4:"Ben",
        }
    };
    render() {
        return (
            <div className="edit">
                <ListGroup>
  
  <ListGroup.Item action  className="edit1">
  <Image src="https://cdn.pixabay.com/photo/2017/08/12/18/31/male-2634974_960_720.jpg" roundedCircle className="img" />
    {this.state.name1}
  </ListGroup.Item>
  <ListGroup.Item action  className="edit2">
  <Image src="https://cdn.pixabay.com/photo/2015/03/26/09/57/guy-690653__340.jpg" roundedCircle className="img" />
  {this.state.name2}
  </ListGroup.Item>
  <ListGroup.Item action  className="edit3">
  <Image src="https://cdn.pixabay.com/photo/2015/09/02/13/24/man-919045__340.jpg" roundedCircle className="img" />
  {this.state.name3}
  </ListGroup.Item>
  <ListGroup.Item action  className="edit4">
  <Image src="https://cdn.pixabay.com/photo/2017/03/27/13/28/man-2178721__340.jpg" roundedCircle className="img" />
  {this.state.name4}
  </ListGroup.Item>
  
</ListGroup>
            </div>
        )
    }
}
