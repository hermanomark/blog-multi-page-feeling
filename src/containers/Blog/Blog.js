import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import './Blog.css';
import Posts from './Posts/Posts';
import asyncComponent from '../../hoc/asyncComponent';
// import NewPost from './NewPost/NewPost'; // omitted for loading routes lazily
const asyncNewPost = asyncComponent(() => {
  return import('./NewPost/NewPost'); // this is a dynamic import for hoc
});

class Blog extends Component {

  state = {
    auth: true // to test authentication of new post change to false
  }

  render () {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li> <NavLink // using navlink you can style the active
                to="/posts" 
                 // this exact specify the active navlink for home only
                activeClassName="my-active" // setting up the class name of active if you don't want the default name
                activeStyle={{
                  color: 'orange',
                  textDecoration: 'underline' // You can style the active like this
                }} > Posts </NavLink></li>
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
          { /* <Route path="/" exact component={Posts} /> move this route back to switch because of nested route */ }
          { /*
           <Route path="/new-post" component={NewPost} />
          <Route path="posts/:id" exact component={FullPost} /> // you can use path="posts/:id" to render fullpost individually but it would be better if we use Switch
        */ }
        <Switch> { /* you can mix up route in switch doesn't have to be all inside the switch */}
          { this.state.auth ? <Route path="/new-post" component={asyncNewPost} /> : null } {/* working with guards, for component value should be the asyncNewPost because of lazy routing */}
          <Route path="/posts" component={Posts} />
          <Route render={() => <h1 style={{textAlign: "center"}}>Page not found </h1>} /> { /* better solution on handling 404 not found, you can also use other components here if you want, cannot use simultaneously with Redirect */ }
          { /* <Redirect from="/" to="/posts" /> you can use this to handle 404 not found */ } { /* better solution for redirect */ }
          { /* <Route path="/" component={Posts} /> using redirect */ }
          { /*<Route path="/:id" exact component={FullPost} /> moving this path to nested route */ } { /*make sure this is lower then new-post to not make an interferance, the order stil applies in inside Switch*/}
        </Switch>
      </div>
      );
  }
}

export default Blog;

