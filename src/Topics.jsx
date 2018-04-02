import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);
const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul className="nav">
      <li className="nav-item">
        <Link className="nav-link"to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link"to={`${match.url}/components`}>Components</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link"to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>
    <hr />
    <Route path={`${match.url}/:topicId`} component={Topic} /> 
  </div>
);

  export default Topics; 