import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";
import ReusableForm from "./ReusableForm";

function NewTapForm(props){
  function handleNewTapFormSubmission(event) {
    event.preventDefault();
    props.onNewTapCreation({
      name: event.target.name.value, 
      brand: event.target.brand.value, 
      alcoholContent: parseInt(event.target.alcoholContent.value), 
      price: parseInt(event.target.price.value), 
      quantity: Math.floor(parseFloat(event.target.tap.value) * 124), 
      id: v4()});
  }
  return (
    <React.Fragment>
      <ReusableForm
      formSubmissionHandler={handleNewTapFormSubmission}
      buttonText="Add Tap" />
    </React.Fragment>
  )
}
NewTapForm.propTypes = {
  OnNewTapCreation: PropTypes.func
};

export default NewTapForm;