import React from 'react';
// import { withRouter } from 'react-router-dom';

import './Post.css';

const post = (props) => (
    <article className="Post" onClick={props.clicked}>
      <h1>{props.title}</h1>
        <div className="Info">
        <div className="Author">{props.author}</div>
      </div>
    </article>
  );

// export default withRouter(post); // removing withRouter as hoc just a demonstration of what it can do
export default post;