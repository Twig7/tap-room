import React from "react";
import PropTypes from "prop-types";
import Tap from "./Tap";

function TapBrand(props) {
    const {tap, onClickingEdit, onClickingDelete} = props;
    return (
        <React.Fragment>
            <h3>Tap Details</h3>
            <h3>{tap.name}</h3>
            <p><em>{tap.brand}</em></p>
            <p><em>{tap.alcoholContent}</em></p>
            <p><em>{tap.price}</em></p>
            <h5>{tap.quantity}</h5>
            <button onClick={onClickingEdit}>Update Tap</button>
            <button onClick={()=> onClickingDelete(tap.id) }>Delete</button> 
            <hr/>
        </React.Fragment>
    );
}

TapBrand.propTypes = {
    tap: PropTypes.object,
    onClickingDelete: PropTypes.func,
    onClickingEdit: PropTypes.func
}

export default TapBrand;