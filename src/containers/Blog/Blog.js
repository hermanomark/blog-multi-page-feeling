import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';

class Blog extends Component {

  render () {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li> <NavLink // using navlink you can style the active
                to="/" 
                exact // this exact specify the active navlink for home only
                activeClassName="my-active" // setting up the class name of active if you don't want the default name
                activeStyle={{
                  color: 'orange',
                  textDecoration: 'underline' // You can style the active like this
                }} > Home </NavLink></li>
              <li> <NavLink to={{
                // when making your path with a domain name
                // example.com/posts/new-post // this is wrong
                // example.com/new-post // use this one, this is absolute path does
                // pathname: this.props.match.url + '/new-post', // this is relative path if you want to append current path to the path
                pathname: '/new-post',
                hash: '#submit', // this line of code is sample
                search: '?quick-submit=true' // this is also a sample code
                }}> New Post </NavLink></li>
            </ul>
          </nav>
          { /* <section>
                {post}
              </section>
              <section>
                <FullPost id={this.state.selectedPostId} />
              </section>
              <section>
                <NewPost />
              </section>, old code for single page feeling */ }
        </header>
        { /*<Route path="/" exact render={() => <Posts/>}/>
         <Route path="/" render={() => <h1 style={{textAlign: 'center'}}>Home 2</h1>} /> */ }
          <Route path="/" exact component={Posts} />
          { /*
           <Route path="/new-post" component={NewPost} />
          }
          <Route path="posts/:id" exact component={FullPost} /> // you can use path="posts/:id" to render fullpost individually but it would be better if we use Switch
        */ }
        <Switch> { /* you can mix up route in switch doesn't have to be all inside the switch */}
          <Route path="/new-post" component={NewPost} />
          <Route path="/:id" exact component={FullPost} /> { /*make sure this is lower then new-post to not make an interferance, the order stil applies in inside Switch*/}
        </Switch>
      </div>
      );
  }
}

export default Blog;

