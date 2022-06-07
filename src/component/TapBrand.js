import React from "react";
import PropTypes from "prop-types";

function TapBrand(props) {
    const {tap, onClickingIncrease, onClickingDecrease, onClickingDelete} = props;
    const quantity = tap.quantity === 0 ? "We're out!" : tap.quantity;
    const plsButton = tap.quantity === 0? <p></p> : <button onClick={() => onClickingDecrease(tap.id)}>Buy</button>
    return (
        <React.Fragment>
            <h3>Tap Details</h3>
            <h3>Name: {tap.name}</h3>
            <p><em>Brand: {tap.brand}</em></p>
            <p><em>Alcohol Content: {tap.alcoholContent}</em></p>
            <p><em>Price: {tap.price}</em></p>
            <h5>Quantity: {tap.quantity}</h5>
            <button onClick={props.onClickingEdit}>Update Tap</button>
            <button onClick={onClickingIncrease(tap.id)}>Add pints</button>
            <button onClick={()=> onClickingDelete(tap.id) }>Delete</button> 
            <hr/>
        </React.Fragment>
    );
}

TapBrand.propTypes = {
    tap: PropTypes.object,
    onClickingDelete: PropTypes.func,
    onClickingEdit: PropTypes.func,
    onClickingIncrease: PropTypes.func,
    onClickingDecrease: PropTypes.func
}

export default TapBrand
