import React, { Component } from 'react';
import axios from '../../axios'; // you can name this axiosinstance and update the remaining axios within the file

import './Blog.css';

class Blog extends Component {

  render () {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li> <a href="/"> Home </a></li>
              <li> <a href="/new-post">New Post </a></li>
            </ul>
          </nav>
        </header>
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