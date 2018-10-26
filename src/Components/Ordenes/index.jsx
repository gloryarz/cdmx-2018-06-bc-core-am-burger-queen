import React, { Component } from 'react';
import {Col, Well, Row, Button} from 'react-bootstrap';


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
            <Col xs={12} md={6} lg={4}>
              <Well bsSize="large">
                <Row>
                  <Col xs={8}>
                    <h4 className="">{this.props.name === 'null' ? 
                    (this.props.mail) : (this.props.name)
                  }</h4>
                    <p className="">
                      {this.props.date} {this.props.hour}
                    </p>
                  </Col>
                  <Col xs={10}>
                    <p className="">{this.props.postContent}</p>
                  </Col>
                    <Col xs={10}>
                      <Button onClick={() => this.handleRemovePost(this.postId)}>
                        <i className="fas fa-trash" />
                      </Button>
                    </Col>
                </Row>
              </Well>
            </Col>
          );
    }
}
 
export default Ordenes;