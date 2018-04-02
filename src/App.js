import React from 'react';
import './App.css';
import LoginForm from './LoginForm';
import exisitingUser from './exisitingUser';
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        exisitingUser: exisitingUser.exisitingUser
      }
    }
    signIn(username, password) { 
    let exisitingUser =this.state.exisitingUser;
    let searchedUser=this.searchUser(username,exisitingUser); 
    if(!searchedUser){
      return alert('Enter valid Username')
    } 
      if(searchedUser.password !==password){
        return alert('Enter Password')
      }
    if(searchedUser){
      const list = {username,password};
      localStorage.setItem('List', JSON.stringify(list));
      this.props.history.push('newPage')
    } 
    }
    searchUser(username,exisitingUser){
      for(var i=0;i<exisitingUser.length;i++){
        if(exisitingUser[i].username ===username){
          return exisitingUser[i];
        }
      }
    }
    render() {
      return (
        <div className="bg">
        <div className="container app-container">
          <div className="row">
          <h1> LOGIN FORM</h1>
              <LoginForm 
              onSignIn={this.signIn.bind(this)} 
            />
          </div>
        </div>
        </div>
      )   
    } 
  }
  export default App;