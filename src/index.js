import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import NewPage from './NewPage';
import { BrowserRouter, Route, Switch,Redirect} from 'react-router-dom';
function PrivateRoute ({component: Component, authenticated, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authenticated()
        ? <Component {...props} />
        : <Redirect to={{pathname: '/', state: {from: props.location}}} />}
    />
  )
}
function PublicRoute ({component: Component, authenticated, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => !authenticated()
        ? <Component {...props} />
        : <Redirect to={{pathname: '/newPage', state: {from: props.location}}} />}
    />
  )
}
let isLoggedIn = ()=>{
const result = JSON.parse(localStorage.getItem('List'));
return result 
}
ReactDOM.render(
  <BrowserRouter>
			<Switch>
				<PublicRoute authenticated={isLoggedIn} exact path='/' component={App} />
				<PrivateRoute authenticated={isLoggedIn} path='/newPage' component={NewPage} />
			</Switch>
		</BrowserRouter>,
  document.getElementById('root')
);
