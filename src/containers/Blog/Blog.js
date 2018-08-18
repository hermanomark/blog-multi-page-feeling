import React, { Component } from 'react';
import axios from '../../axios'; // you can name this axiosinstance and update the remaining axios within the file
import { Route, Link } from 'react-router-dom';
import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

class Blog extends Component {

  render () {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li> <Link to="/"> Home </Link></li>
              <li> <Link to={{
                pathname: 'new-post',
                hash: '#submit', // this line of code is sample
                search: '?quick-submit=true' // this is also a sample code
                }}> New Post </Link></li>
            </ul>
          </nav>
        </header>
        { /*<Route path="/" exact render={() => <Posts/>}/>
         <Route path="/" render={() => <h1 style={{textAlign: 'center'}}>Home 2</h1>} /> */ }
        <Route path="/" exact component={Posts} />
        <Route path="/new-post" component={NewPost} />
      </div>
      );
  }
}

export default Blog;

// <section>
//   <FullPost id={this.state.selectedPostId} />
// </section>
// <section>
//   <NewPost />
// </section>