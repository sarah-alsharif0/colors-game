import React, { useState } from "react";
import "../stripe/stripe.css";

export const Stripe = (props) => {
  const { message, buttonText, changeDifficulty, handleReset } = props;
  const [level, setLevel] = useState("hard");

  const handleEasy = () => {
    setLevel("easy");
    changeDifficulty(3);
  };

  const handleHard = () => {
    setLevel("hard");
    changeDifficulty(6);
  };

  return (
    <div id="stripe">
      <button onClick={()=>handleReset(level==='easy'?3:6)} id="reset">
        {buttonText}
      </button>
      <span id="message">{message}</span>

      <button
        className={level === "easy" ? "selected" : ""}
        onClick={handleEasy}
        id="easyBtn"
      >
        Easy
      </button>

      <button
        className={level === "hard" ? "selected" : ""}
        onClick={handleHard}
        id="hardBtn"
      >
        Hard
      </button>
    </div>
  );
};
