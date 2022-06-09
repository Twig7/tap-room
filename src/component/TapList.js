import React from "react";
import Tap from "./Tap";
import PropTypes from "prop-types";

function TapList(props) {
  return (
    <React.Fragment>
      {props.tapList.map((tap) => 
        <Tap 
          whenTapClicked = {props.onTapSelection}
          whenDecrementingTapClicked={props.onDecrementingTap}
          name = {tap.name}
          brand = {tap.brand}
          price = {tap.price}
          alcoholContent = {tap.alcoholContent}
          quantity = {tap.quantity}
          id = {tap.id}
          key = {tap.id} />
      )}
    </React.Fragment>
  );
}

TapList.propTypes = {
  tapList: PropTypes.array,
  onTapSelection: PropTypes.func,
  onDecrementingTap: PropTypes.func
};

export default TapList