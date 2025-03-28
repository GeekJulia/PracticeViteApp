import { useState } from "react";
import ReactDOM from "react-dom/client"
//PRACTICE USE STATE

export default function BrandCar(){
    const[brand,setBrand] = useState("Ford");
    const[model,setModel] = useState("Mustang");
    const[year,setYear] = useState("1964");
    const[color, setColor] = useState("red");
    
    return(
        <>
        <h1>My car is a {brand} {model}</h1>
        <p>It was made is {year} and the color is {color}</p>
        </>
    )
}