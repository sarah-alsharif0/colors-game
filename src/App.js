import "./App.css";
import { ColorsContainer } from "./components/colorsContainer/colorsContainer";
import { Header } from "./components/header/header";
import { Stripe } from "./components/stripe/stripe";
import { useState, useEffect } from "react";
import "./assets/styles/body.css";

function App() {
  const [rgbCode, setRgbCode] = useState("");
  const [message, setMessage] = useState("");
  const [numSquares, setNumSquares] = useState(6);
  const [colors, setColors] = useState([]);
  const [buttonText, setButtonText] = useState("New Colors");
  const [isSuccess, setIsSuccess] = useState(false);

  const randomColor = () => {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
  };

  const generateRandomColors = (num) => {
    var arr = [];
    for (var i = 0; i < num; i++) {
      arr.push(randomColor());
    }
    setRgbCode(pickColor(arr));
    return arr;
  };

  const pickColor = (arr) => {
    var random = Math.floor(Math.random() * arr.length);
    return arr[random];
  };

  const changeColors = () => {
    for (var i = 0; i < colors.length; i++) {
      colors[i] = rgbCode;
    }
  };

  const successfulTry = () => {
    setIsSuccess(true);
    setMessage("Good Job!");
    setButtonText("Play Again ?");
    changeColors(rgbCode);
  };

  const failedTry = (index) => {
    setIsSuccess(false);
    const tmpColors = [
      ...[...colors].slice(0, index),
      (colors[index] = "#232323"),
      ...[...colors].slice(index + 1),
    ];
    setColors(tmpColors);
    setMessage("Try Again");
  };

  const changeDifficulty = (num) => {
    setNumSquares(num);
    setColors(generateRandomColors(num));
  };

  const handleReset = () => {
    setColors(generateRandomColors(numSquares));
    setMessage("");
    setIsSuccess(false);
  };

  useEffect(() => {
    setColors(generateRandomColors(numSquares));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <Header isSuccess={isSuccess} rgbCode={rgbCode} />
      <Stripe
        changeDifficulty={changeDifficulty}
        handleReset={handleReset}
        buttonText={buttonText}
        message={message}
      />

      <ColorsContainer
        rgbCode={rgbCode}
        colors={colors}
        successfulTry={successfulTry}
        failedTry={failedTry}
      />
    </div>
  );
}

export default App;
