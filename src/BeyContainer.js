import React from "react";
import BeyCard from "./BeyCard";
import {connect} from 'react-redux'

function BeyContainer(props) {
  // console.log(props)
  return (
    <div className="index">
      <h1>Index</h1>
      {props.beys.sort((a, b) => b.num_of_clicks - a.num_of_clicks).map(bey=> <BeyCard key={bey.id} bey={bey} inIndex={true}/>)}
    </div>
  );
}

const msp = state => {
  return {
    beys: state.beys.filter(bey => bey.name.toLowerCase().includes(state.searchValue.toLowerCase()))
  };
}

export default connect(msp)(BeyContainer);
