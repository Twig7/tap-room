import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";
import ReusableForm from "./ReusableForm";

function NewTapForm(props){
  return (
    <React.Fragment>
      <ReusableForm
      formSubmissionHandler={handleNewTapFormSubmission}
      buttonText="Add Tap" />
    </React.Fragment>
  );
  function handleNewTapFormSubmission(event) {
    event.preventDefault();
    props.onNewTapCreation({name: event.target.name.value, brand: event.target.brand.value, alcoholContent: event.target.alcoholContent.value, price: event.target.price.value, quantity: event.target.quantity.value, id: v4()});
  }
}
NewTapForm.propTypes = {
  OnNewTapCreation: PropTypes.func
};

export default NewTapForm;