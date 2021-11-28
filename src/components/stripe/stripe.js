import React from "react";
import '../stripe/stripe.css';

export const Stripe = (props) => {
  const {message} = props;
  return (
    <div id="stripe">
      <button id="reset">New Colors</button>
      <span id="message">{}</span>
      <button id="easyBtn">Easy</button>
      <button class="selected" id="hardBtn">
        Hard
      </button>
    </div>
  );
};
