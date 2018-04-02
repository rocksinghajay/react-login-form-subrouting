import React from 'react';
import { BrowserRouter as Router,Route, Link} from 'react-router-dom';
import Home from './Home.js';
import Topics from './Topics';
import About from './About';
import Api from './Api';
class NewPage extends React.Component{
    constructor(props){
        super(props)
        this.logOut=this.logOut.bind(this)
    }
    logOut () {
        window && window.localStorage.clear()
        this.props.history.push("/");
    }
    render(){
      const match =this.props.match;
        return(
            <div className="container newpage">
           <button className="btn btn-danger float-right" onClick={this.logOut}>Log Out</button>
           <Router>
    <div>
      <ul className="nav">  
        <li className="nav-item">
          <Link className="nav-link" to={`${match.url}/home`}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={`${match.url}/about`}>About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={`${match.url}/gallery`}>Gallery</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={`${match.url}/topics`}>Topics</Link>
        </li>
      </ul>
      <hr />
      <Route path={`${match.url}/home`} component={Home} />
      <Route path={`${match.url}/about`} component={About} />
      <Route path={`${match.url}/gallery`} component={Api} />
      <Route path={`${match.url}/topics`} component={Topics} />
    </div>
  </Router>
  </div>
        );
    }
}
export default NewPage;