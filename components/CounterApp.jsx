import styled from "styled-components";
import { useState } from "react";
function CounterApp() {
  const [state, setState] = useState(0);

  const Button = styled.button`
    height: 100px;
    width: 150px;
    background-color: blue;
    color: white;
  `;

  function hanleIncrease() {
    setState(state + 1);
  }

  let message;
  let remainingClick = 10 - state;

  if (state < 10) {
    message = (
      <div>
        <h3>You clicked {state} times</h3>
        <p>Still {remainingClick} </p>
      </div>
    );
  } else if (state == 10) {
    message = (
      <>
        <h3>You have Clicked {state} times </h3>
        <p>You earned 10% discount </p>
      </>
    );
  } else if (state == 20) {
    message = (
      <div>
        <h3>You have Clicked {state} times </h3>
        <p>You earned 20% discount </p>
      </div>
    );
  }

  return (
    <div>
      <h1> Click to unlock Rewards 🙌 {state} </h1>
      <Button onClick={hanleIncrease}>Clicker</Button>
      {message}
      {/* {state >=10 ?
        <p>You earned 10% reward</p>
        :
        <p>You have to click 10 times to earn reward</p>
      }
      {
        state >=15 && <p>You earned 25% discount</p> 
      } */}
    </div>
  );
}

export default CounterApp;
