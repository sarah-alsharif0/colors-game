import React from "react";
import "../header/header.css";

export const Header = (props) => {
  const { rgbCode, isSuccess } = props;

  return (
    <div>
      <h1 style={{ background: isSuccess ? rgbCode : "" }}>
        The Great
        <br />
        <span id="rgbCode">{rgbCode}</span>
        <br />
        Color Picking Game
      </h1>
    </div>
  );
};
