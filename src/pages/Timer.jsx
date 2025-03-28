import  {useState,useEffect} from "react";
//PRACTICE USEEFFECT CODE

export default function Timer(){
    const[count,setCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {setCount((count) => count + 1);},5000); //increase count by every 1000 miliseconds, meaning 1 second
        /*setTimeout is a sideEffect, so this is inside the useEffect function */
    },[]); //added a dependency array so that it runs with every change on count

    return(<>
    <h1>This page has rendered {count} times!</h1>
    </>)
}