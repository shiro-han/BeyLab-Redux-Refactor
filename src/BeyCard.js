import React from "react";

const BeyCard = (props) => {

  const wrapperFn = () => {
    props.clickHandler(props.bey)
  }
  
  return (
    <div onClick={wrapperFn}>
      <h3>{props.bey.name}</h3>
      <img alt='' src={props.bey.img} />
    </div>
  );
};

export default BeyCard;
