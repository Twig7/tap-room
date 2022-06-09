import React from "react";
import PropTypes from "prop-types";


function Tap(props){
  let soldAmount;
  let alert = <p>Fully Stocked</p>;
  if (props.quantity !== 0){
    soldAmount = props.quantity - 1;
    if (soldAmount < 15){
      alert = <p>Whoa this one is popular!</p>;
    };
  } else {
    alert = <p>Too sloooooooow, we're out!</p>;
  };

  return (
    <React.Fragment>
        <b>{alert}</b>
        <h3>{props.name}</h3>
        <p>Brand: {props.brand}</p>
        <p>Alcohol Content: {props.alcoholContent}%</p>
        <p>Price: ${props.price}</p>
        <h5>Tap: {props.quantity} left</h5>
        <button onClick = {() => props.whenTapClicked(props.id)}>Get the deets</button>
      <button variant="success" onClick = {() => props.whenDecrementingTapClicked(props.id)}>Buy some of this!</button>
    </React.Fragment>
  );
}

Tap.propType = {
  name: PropTypes.string,
  brand: PropTypes.string,
  quantity: PropTypes.number,
  alcoholContent: PropTypes.number,
  price: PropTypes.number,
  id: PropTypes.string,
  whenTapClicked: PropTypes.func,
  whenDecrementingTapClicked: PropTypes.func
};

export default Tap;