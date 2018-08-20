import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import './NewPost.css';

class NewPost extends Component {
  state = {
    title: '',
    content: '',
    author: '',
    submitted: false
  }

  componentDidMount() {
    console.log(this.props)
    // if unauth => this.props.history.replace("/posts") // alternatve way to redirect user using componentDidMount conditionally
  }

  postDataHandler = () => {
    const data = {
      title: this.state.title,
      body: this.state.content,
      author: this.state.author
    }
    axios.post('/posts', data)
      .then(response => {
        console.log(response);
       // this.setState({submitted: true});
       // this.props.history.replace("/posts") // other way to do it but back butto in browser will not work, this is use for other use case
       this.props.history.push("/posts") // not using Redirect component to redirect the user
      })
  }

  render () {
    let redirect = null;
    if (this.state.submitted) {
      return <Redirect to="/posts" />
    } // this code is now redundant because of this.props.history.push("/posts") but I'll leave it here for reference
    return (
      <div className="NewPost">
        <h1>Add a Post</h1>
        <label>Title</label>
        <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
        <label>Content</label>
        <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
        <label>Author</label>
        <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
          <option value="Mark">Mark</option>
          <option value="Mic">Mic</option>
        </select>
        <button onClick={this.postDataHandler}>Add Post</button>
      </div>
      );
  }
}

export default NewPost;