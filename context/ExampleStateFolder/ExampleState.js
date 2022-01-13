import { useReducer } from "react";
import { INCREASE, DECREASE } from "../types";
import exampleContext from "./exampleContext";
import exampleReducer from "./exampleReducer";

const ExampleState = (props) => {
  const initState = {
    counter: 0,
  };

  const [state, dispatch] = useReducer(exampleReducer, initState);

  //   REDUCER ACTION FUNCTIONS
  // -- Increase counter
  const increaseCounter = (counter) => {
    dispatch({
      type: INCREASE,
      payload: counter,
    });
  };

  // -- Decrease counter
  const decreaseCounter = (counter) => {
    dispatch({
      type: DECREASE,
      payload: counter,
    });
  };

  return (
    <exampleContext.Provider
      value={{ counter: state.counter, increaseCounter, decreaseCounter }}
    >
      {props.children}
    </exampleContext.Provider>
  );
};

export default ExampleState;
