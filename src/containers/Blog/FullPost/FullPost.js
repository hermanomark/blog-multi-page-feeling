import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {
  state = {
    loadedPost: null
  }

  componentDidMount() { 
    console.log(this.props);
    this.loadData();
  } // this will become Mount as we're not anymore updating it 

  componentDidUpdate() { 
    this.loadData();
  } // because of nested route we need to add componentDidUpdate again

  loadData() {
    if (this.props.match.params.id) { {/* make sure now to add .match.params.id, id is the one that we specify in blog.js <Route path="/:id"... */}
      if (!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== +this.props.match.params.id)) // infinite loop will not work must change to +this.props.match.params.id to solve the problem, the + is to change the id to integer
       { 
        axios.get('/posts/' + this.props.match.params.id)
          .then(response => {
            this.setState({loadedPost: response.data})
          // console.log(response);
        })
      }
    }
  }

  deletePostHandler = () => {
    axios.delete('/posts/' + this.props.match.params.id)
      .then(response => {
        console.log(response);
      })
  }

  render () {
    let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;
    if (this.props.match.params.id) {
      post = <p style={{textAlign: 'center'}}>Loading...!</p>;
    }
    if (this.state.loadedPost) {
      post = (
      <div className="FullPost">
        <h1>{this.state.loadedPost.title}</h1>
          <p>{this.state.loadedPost.body}</p>
        <div className="Edit">
          <button className="Delete" onClick={this.deletePostHandler}>Delete</button>
        </div>
      </div>
      );
    }

    return post;
  }
}

export default FullPost;