import React from "react";
import '../header/header.css'

export const Header = (props) => {
    const {color} = props;
  return (
    <div>
      <h1>
        The Great
        <br />
        <span id="rgbCode">RGB{color}</span>
        <br />
        Color Picking Game
      </h1>
    </div>
  );
};
