import React,{useState} from "react"
//PRACTICE USE-STATE

export default function FavColor(){
    const[color, setColor] = useState("red");

return (
    <>
        <h1>My favorite color is {color}!</h1>
        <button
        type = "button"
        onClick = {() => setColor("blue")}>Blue</button>
        <button
        type = "button"
        onClick = {() => setColor("red")}>Red</button>
        <button
        type = "button"
        onClick = {() => setColor("green")}>Green</button>
        <button
        type = "button"
        onClick = {() => setColor("yellow")}>Yellow</button>
    </>
)
}