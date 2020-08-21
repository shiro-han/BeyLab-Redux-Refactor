import React from "react";
import beyArray from './api';
import BeyContainer from './BeyContainer'
import Favorites from './Favorites'
import CreateForm from './CreateForm'
import SearchForm from './SearchForm'
import "./App.css";

class App extends React.Component{
  // state = {
  //   beys: beyArray.map(bey => {
  //     bey.num_of_clicks = 0;
  //     return bey;
  //   }),
  //   searchValue: ""
  // }

  // indexClickHandler = (id) => this.clickedBeyFn(id, true);

  // favClickHandler = (id) => {
  //   window.alert('I got a hot sauce in my bag, swag');
  //   this.clickedBeyFn(id, false);
  // }

  // clickedBeyFn = (id, bool) => {
  //   let array = [...this.state.beys];
  //   let clickedBey = array.find(bey => bey.id === id);
  //   clickedBey.favorite = bool;
  //   clickedBey.num_of_clicks++;
  //   // console.log(clickedBey.name, 'click count:', clickedBey.num_of_clicks);
  //   this.setState({beys: array});
  // }

  addBey = (obj) => {
    obj.favorite = false;
    obj.num_of_clicks = 0;
    let array = [...this.state.beys];
    array.push(obj);
    this.setState({beys: array});
  }

  searchHandler = (e) => this.setState({searchValue: e.target.value});

  // searchFilteredBeys = () => this.state.beys.filter(bey => bey.name.toLowerCase().includes(this.state.searchValue.toLowerCase()));

  render() {
  return (
    <>
      <br/>
      <div className="container">
        <CreateForm addBey={this.addBey}/>
        <SearchForm searchHandler={this.searchHandler}/>
      </div>
      <br/>
      <div className="container">
        <BeyContainer />
        <Favorites />
      </div>
    </>
  )}
}

export default App;
