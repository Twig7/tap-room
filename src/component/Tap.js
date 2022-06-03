import React from "react";
import PropTypes from "prop-types";


function Tap(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenTapClicked(props.id)}>
        <h3>{props.name}</h3>
        <p>{props.brand}</p>
        <p>{props.alcoholContent}</p>
        <p>{props.price}</p>
        <h5>{props.quantity} left</h5>
        <hr/>
      </div>
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
  whenTapClicked: PropTypes.func
};

export default Tap;