import './App.css';
import { ColorsContainer } from './components/colorsContainer/colorsContainer';
import { Header } from './components/header/header';
import { Stripe } from './components/stripe/stripe';
import {useState} from 'react';
import './assets/styles/body.css'

function App() {
  const [color, setColor] = useState("(0,0,0)");
  const [message, setMessage] = useState("")

  return (
    <div className="App">
      <Header color={color}/>
      <Stripe message={message}/>
      <ColorsContainer/>
    </div>
  );
}

export default App;
