import React from "react";

function Countdown(props) {
  const { countdown } = props;

  return (
    <div className="countdown">
      <h2>Get Ready!</h2>
      <h3>{countdown}</h3>
    </div>
  );
}

export default Countdown;
