import React from "react";
import BeyCard from './BeyCard';
import {connect} from 'react-redux'

function Favorites(props) {
    return (
      <div className="favorites">
        <h1>Favorites</h1>
        {props.beys.filter(bey => bey.favorite).map(bey => <BeyCard key={bey.id} bey={bey} inIndex={false} />)}
      </div>
    )
}

const msp = state => {
  return {
    beys: state.beys.filter(bey => bey.name.toLowerCase().includes(state.searchValue.toLowerCase()))
  };
}

export default connect(msp)(Favorites);