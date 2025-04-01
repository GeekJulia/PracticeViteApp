import {useState, useCallback} from "react";
//PRACTICE FOR USECALLBACK

function Counter({increment}){
    console.log("Counter Component Rendered!");

    return(
        <div>
            <button onClick={increment}>Increment</button>
        </div>
    );
}
export default function CallbackApp(){
    const [count,setCount] = useState(0)
    const [text,setText] = useState('')

    //useCallBack memoizes the increment function
    const increment = useCallback (() => {
        setCount(count + 1);
    },[count]); //only re-create if count changes

    return(
        <>
        <input value = {text}
            onChange = {(e) => setText(e.target.value)}
            placeholder = "Type Something"
        />
        <p>Count : {count}</p>
        <Counter increment = {increment} />
        </>
    );
}