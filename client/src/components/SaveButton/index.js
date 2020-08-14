import React from "react";
// import "./style.css";
import Button from '@material-ui/core/Button';

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
// <span className="Button" {...props} role="button" tabIndex="0">Save
// </span>
function SaveBtn(props) {
  return (
    <Button className="Button" {...props} variant="contained" color="primary">
    Save
  </Button>
  );
}

export default SaveBtn;