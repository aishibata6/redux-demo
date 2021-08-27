// default node js code to import 3rd party package (node modules)
const redux = require("redux");

// reducer function - always receive old state and dispatched action.
// it returns a new state object.
// do not include http request
const counterReducer = (state = {counter: 0}, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};

const store = redux.createStore(counterReducer);

// subscriber function gets the latest state SNAPSHOT after it was changed
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

// tell store to subscribe to the counterSubscriber
store.subscribe(counterSubscriber);

// action is a Javascript object with a type property which works as identifier in case there are many reducers
store.dispatch({type: "increment"});
store.dispatch({type: "decrement"});
store.dispatch({type: "increment"});
store.dispatch({type: "increment"});
store.dispatch({type: "increment"});
