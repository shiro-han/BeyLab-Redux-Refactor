import React from "react";
import BeyCard from "./BeyCard";

class BeyContainer extends React.Component {
  render() {
    return (
      <div className="index">
        <h1>Index</h1>
        {this.props.beys.sort((a, b) => b.num_of_clicks - a.num_of_clicks).map(bey=> <BeyCard key={bey.id} bey={bey} clickHandler={this.props.clickHandler}/>)}
      </div>
    );
  }
}

export default BeyContainer;
