import React from "react";
import beyArray from './api';
import BeyContainer from './BeyContainer'
import Favorites from './Favorites'
import "./App.css";

class App extends React.Component{
  state = {beys: [...beyArray.map(bey => {
    bey.num_of_clicks = 0;
    return bey;
  })]}

  indexClickHandler = (obj) => {this.clickedBeyFn(obj, true)}

  favClickHandler = (obj) => {
    window.alert('I got a hot sauce in my bag, swag');
    this.clickedBeyFn(obj, false);
  }

  clickedBeyFn = (obj, bool) => {
    let clickedBey = this.state.beys.find(bey => bey.id === obj.id)
    let index = this.state.beys.indexOf(clickedBey)
    let array = this.state.beys
    array[index].favorite = bool
    array[index].num_of_clicks++;
    console.log(array[index].name, 'click count:', array[index].num_of_clicks)
    this.setState({beys: array})
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
