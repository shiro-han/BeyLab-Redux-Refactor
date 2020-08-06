import React from "react";

const BeyCard = (props) => {

  // const wrapperFn = () => {props.clickHandler(props.bey)}
  
  return (
    <div>
      <h3>{props.bey.name}</h3>
      <img onClick={() => props.clickHandler(props.bey.id)} alt='' src={props.bey.img} />
    </div>
  );
};

export default BeyCard;
