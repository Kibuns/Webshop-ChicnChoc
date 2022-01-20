import React from "react";

const ErrorPage = (props) => {
  return (
    <div>
      <center>
        {/* Keep this phrase in this component, testing purposes. */}
        <h1>Oops, something went wrong</h1>
        <p>{props.message}</p>
      </center>
    </div>
  );
};

export default ErrorPage;
