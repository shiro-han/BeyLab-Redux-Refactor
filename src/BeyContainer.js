import React from "react";
import BeyCard from "./BeyCard";

function BeyContainer(props) {
  return (
    <div className="index">
      <h1>Index</h1>
      {props.beys.sort((a, b) => b.num_of_clicks - a.num_of_clicks).map(bey=> <BeyCard key={bey.id} bey={bey} clickHandler={props.clickHandler}/>)}
    </div>
  );
}

export default BeyContainer;
