import './App.css'
import ButtonClick from './Button';
import Counter from './Counter';
import Form from './Form';
import Todo from './Todo';
import LotteryGame from "./LotteryGame";
import { sum } from "./helper";
import Comments from "./Comments";
import Joker from './Joker';

let winCondition = (ticket) => {
  return sum(ticket) === 15;
};

// Change this value to render a different app
const ACTIVE_APP = "JOKER"; 
// BUTTON | COUNTER | FORM | TODO | LOTTERY | COMMENTS | JOKER

function App() {
  switch (ACTIVE_APP) {
    case "BUTTON":
      return <ButtonClick />;
    case "COUNTER":
      return <Counter />;
    case "FORM":
      return <Form />;
    case "TODO":
      return <Todo />;
    case "LOTTERY":
      return <LotteryGame n={5} winCondition={winCondition} />;
    case "COMMENTS":
      return <Comments />;
    case "JOKER":
      return <Joker />;
    default:
      return <h2>Select a valid app</h2>;
  }
}

export default App;
