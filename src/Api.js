import React, { Component } from 'react';
class Api extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures:[],
    };
  }
componentDidMount(){
  fetch('https://randomuser.me/api/?results=105')
  .then(results =>{
    return results.json();
  }).then(data =>{
    let pictures = data.results.map((pic)=>{
      return(
        <img src={pic.picture.medium} alt="randomusers"/>
      )
    })
    this.setState({pictures:pictures});
  })
}
  render() {
    return (
      <div className="App">
      {this.state.pictures}
      </div>
    );
  }
}
export default Api;