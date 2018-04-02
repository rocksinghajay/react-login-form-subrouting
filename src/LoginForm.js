import React from 'react';
class LoginForm extends React.Component {
    handleSignIn(e) {
      e.preventDefault()
      let username = this.refs.username.value
      let password = this.refs.password.value
      this.props.onSignIn(username, password)
    }
    render() {
      return (
          <div>
          <h2>Login To Your Account</h2>
        <form onSubmit={this.handleSignIn.bind(this)}>
          <input type="text" ref="username" placeholder="enter your username" /><br /><br />
          <input type="password" ref="password" placeholder="enter password" /><br /><br />
          <input type="submit" value="Login" />
        </form>
        </div>
      )
    } 
  }
  export default LoginForm;