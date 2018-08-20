import React, { Component } from 'react';
import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import './Posts.css';
import FullPost from  '../FullPost/FullPost';
import { Route } from 'react-router-dom';

class Posts extends Component {
  state = {
    posts: [],
    // selectedPostId: null,
    // error: false
  }

  componentDidMount() {
    console.log(this.props)

    axios.get('/posts')
    .then(response => {
      const posts = response.data.slice(0, 4);
      const updatedPosts =  posts.map(post => {
        return { 
          ...post,
          author: 'Mark'
        }
      })
      this.setState({posts: updatedPosts})
              // console.log(response);
            })
    .catch(error => {
      // this.setState({error: true})
      // console.log(error);
    })
  }

  postSelectedHandler = (id) => {
    // this.setState({selectedPostId: id})
    // this.props.history.push({pathname: '/posts/' + id}); navigating programatically
    this.props.history.push('/posts/' + id); // other way to do it
  }
  
  render() {
    let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>
    if (!this.state.error) {
     posts = this.state.posts.map(post => {
      return (
       // <Link to={'/posts/' + post.id} key={post.id} >  key should now be in Link because wen were mapping the outer div should have the key
          <Post 
          key={post.id} 
          title={post.title} 
          author={post.author} 
          clicked={() => this.postSelectedHandler(post.id)} />
       // </Link>
       );
      }) 
    }

    return(
      <div>
        <section className="Posts">
          {posts}
        </section>
        <Route path={this.props.match.url + "/:id"} exact component={FullPost} />
      </div>
      );
  }
}

export default Posts;

