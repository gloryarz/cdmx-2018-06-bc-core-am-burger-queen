import React, { Component } from 'react';
import {Col, Well, Row, Button} from 'react-bootstrap';
import './main.css';

class Ordenes extends Component {
    constructor(props){
        super(props);
        this.postId = props.postId;
        this.handleRemovePost = this.handleRemovePost.bind(this);
        console.log('ordenes', props)

    }

    handleRemovePost = (id) => {
        console.log("key: " + id);
        this.props.removePost(id);
      }

    render() { 
        return (
            <Col xs={12} md={6} lg={4} className="mar">
              <Well bsSize="large">
                <Row>
                  <Col xs={8}>
                    <h4 className="">{
                    this.props.mail
                    }</h4>
                    <p className="">
                      {this.props.date} {this.props.hour}
                    </p>
                  </Col>
                  <Col xs={10}>
                    <p className="order">{this.props.postContent}</p>
                  </Col>
                    <Col xs={10}>
                      <Button onClick={() => this.handleRemovePost(this.postId)}>
                        <i class="far fa-thumbs-up"></i>
                      </Button>
                    </Col>
                </Row>
              </Well>
            </Col>
          );
    }
}
 
export default Ordenes;