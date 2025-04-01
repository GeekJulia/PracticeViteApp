import { useReducer } from "react";
//PRACTICE FOR USEREDUCER

//setting up the intital state
const initialState = { //question: why is it in a dictionary
  count:0 //this is our starting point the counter starts at 0
}

//creating the reducer function which will be used to update the state
function reducer(state,action) { // starting a reducer function, that takes an action and updates the state
  switch(action.type){ //question: Why do we pass in action.type instead of just action
    case "increment" :
      return{count : state.count + 1} //we are passing initialState inside so to access the count value we do state.count like initialState.count
    case "decrement" :
      return {count : state.count -1}
    case "reset" :
      return initialState;
      default:
        throw new Error();
  }
}

//using useReducer in the component
export default function Reduceapp(){
const[state,dispatch] = useReducer(reducer, initialState); // question the value of state at this point
return (
  <div>
    <p>Count : {state.count}</p>
    <button onClick={
      () => {
        dispatch({type : "increment"})
      }
    }>+</button>
    <button onClick={
      () => {
        dispatch({type : "decrement"})
      }
  }>-</button>
    <button onClick={
      () => {
        dispatch({type : "reset"})
      }
  }>Reset</button>
  </div>
)
}