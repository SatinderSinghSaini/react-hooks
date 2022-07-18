import React, { useState } from "react";

const InputElement = () =>{
    const [inputText, setInputText] = useState('');
    return <div>
        <input onChange={(e)=>setInputText(e.target.value)}
    placeholder="Type Some Text"/><br/>
    {inputText}<br/>
    </div>
}

export default InputElement;