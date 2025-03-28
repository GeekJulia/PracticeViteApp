import {useRef,React} from "react";
//PRACTICE FOR USEREF

export default function Focusinput(){
    const inputElement = useRef();

    const focusInput=(() => {
        inputElement.current.focus();
    });

    return (
        <>
        <input type="text" ref={inputElement} />
        <button onClick={focusInput}>Focus Input</button>
        </>
    );
}
