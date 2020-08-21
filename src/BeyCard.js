import React from "react";
import {connect} from 'react-redux'

const BeyCard = (props) => {

  // const wrapperFn = () => {props.clickHandler(props.bey)}
  const clickAction = () => {
    if (!props.inIndex){
      window.alert('I got a hot sauce in my bag, swag');
    }
    return {
      type: 'CLICK_BEY',
      id: props.bey.id,
      bool: props.inIndex
    }
  }

  return (
    <div>
      <h3>{props.bey.name}</h3>
      <img onClick={() => props.dispatch(clickAction())} alt='' src={props.bey.img} />
    </div>
  );
};

export default connect()(BeyCard);
