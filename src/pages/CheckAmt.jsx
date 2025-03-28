import { useState, useRef, useEffect } from "react";
//PRACTICE FOR USEREF
//Count how many times our application renders

export default function CheckAmt(){
    const [inputValue, setInputValue] = useState("");
    const count = useRef(0);

    useEffect(() => {
        count.current = count.current + 1;
    });
    return (
        <>
        <input
        type = "text"
        value = {inputValue}
        onChange = {(e) => {setInputValue(e.target.value)}}
        />
        <h1>Render Count: {count.current}</h1>
        </>
    );
}