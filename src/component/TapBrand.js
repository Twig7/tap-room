import React from "react";
import PropTypes from "prop-types";

function TapBrand(props) {
    const {tap} = props;
    return (
        <React.Fragment>
            <h3>Tap Details</h3>
            <h3>Name: {tap.name}</h3>
            <p><em>Brand: {tap.brand}</em></p>
            <p><em>Alcohol Content: {tap.alcoholContent}%</em></p>
            <p><em>Price: {tap.price}</em></p>
            <h5>Quantity: {tap.quantity}</h5>
        </React.Fragment>
    );
}

TapBrand.propTypes = {
    tap: PropTypes.object
};

export default TapBrand;
