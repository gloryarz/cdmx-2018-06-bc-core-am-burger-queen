import React, { Component } from "react";
import { Jumbotron, Button } from "react-bootstrap";
import { fbsConfig } from "../../Config/ConfigFB";
import "firebase/database";
import Ordenes from '../Ordenes/'


class Cocina extends Component {
  state = {};
  constructor(props) {
    super(props);

    this.state = {
      pedidos: []
    };

    this.db = fbsConfig
      .database()
      .ref()
      .child("pedidos");
  }


  componentDidMount() {
    const ordenes = this.state.pedidos;

    this.db.on("child_added", snap => {
      ordenes.push({
        id: snap.key,
        postContent: snap.val().postContent,
        user: snap.val().userUid,
        mail: snap.val().mail,
        hour: snap.val().hour,
        date: snap.val().date
    });
    this.setState({
        notes: ordenes
      });
    });

    this.db.on("child_removed", snap => {
        for (let i = 0; i < ordenes.length; i++) {
          if (ordenes[i].id === snap.key) {
            ordenes.splice(i, 1);
          }
        }
        this.setState({
          notes: ordenes
        });
      });



    };
    
    removePost = (postId) => {
        console.log("removePost" + postId)
        this.db.child(postId).remove()
      };

  render() {
    return (
        <div>
        <section>
          {this.state.pedidos.map(post => {
            return (
              <Ordenes
                postContent={post.postContent}
                postId={post.id}
                key={post.id}
                removePost={this.removePost}
                user={post.user}
                mail={post.mail}
                date={post.date}
                hour={post.hour}
              />
              );
            })}
          </section>
          </div>
      );
  }
}

export default Cocina;
