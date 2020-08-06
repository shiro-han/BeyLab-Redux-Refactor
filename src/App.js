import React from "react";
import beyArray from './api';
import BeyContainer from './BeyContainer'
import Favorites from './Favorites'
import "./App.css";

class App extends React.Component{
  state = {beys: beyArray.map(bey => {
    bey.num_of_clicks = 0;
    return bey;
  })}

  indexClickHandler = (id) => {this.clickedBeyFn(id, true)}

  favClickHandler = (id) => {
    window.alert('I got a hot sauce in my bag, swag');
    this.clickedBeyFn(id, false);
  }

  clickedBeyFn = (id, bool) => {
    let array = [...this.state.beys]
    let clickedBey = array.find(bey => bey.id === id);
    clickedBey.favorite = bool;
    clickedBey.num_of_clicks++;
    // console.log(clickedBey.name, 'click count:', clickedBey.num_of_clicks);
    this.setState({beys: array});
  }

  render() {
  return (
    <div className="container">
      <BeyContainer clickHandler={this.indexClickHandler} beys={this.state.beys}/>
      <Favorites clickHandler={this.favClickHandler} beys={this.state.beys}/>
    </div>
  )}
}

export default App;
