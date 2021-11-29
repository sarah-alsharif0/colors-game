import React from "react";
import "../colorsContainer/colorsContainer.css";

export const ColorsContainer = (props) => {
  const { colors, rgbCode, successfulTry, failedTry } = props;

  const handleClick = (index) => {
    var clickedColor = colors[index];

    if (clickedColor === rgbCode) {
      successfulTry();
    } else {
      failedTry(index);
    }
  };

  return (
    <div id="container">
      {colors.map((item, index) => (
        <div
          key={index}
          style={{ background: item }}
          onClick={() => handleClick(index)}
          className="square"
        ></div>
      ))}
    </div>
  );
};
