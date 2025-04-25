import { isVisible } from "@testing-library/user-event/dist/utils";
import { useState } from "react";

let ShowHide = () => {

    const [text, setText] = useState("Hello, React");
    const [hide, setHide] = useState(false);

    const showHide = () => {
        setHide(prev => !prev);
    };

    return (
        <div>
            {!hide && <h1>{text}</h1>}
            <button onClick={showHide}>
                {hide ? '보이기' : '숨기기'}
            </button>
            
        </div>
    )
}




// 컴포넌트명은 Sol1
export let Sol1 = ({add}) => {

    const [eating, setEating] = useState(['초콜릿','사탕']);
    const [value, setValue] = useState("");

   const inputHandler = (e) => {
    setValue(e.target.value);
   }

   const clickHandler = () => {
    setEating(prev => [value, ...prev]);
   }

    return (
        <div>
            <input onChange={inputHandler} />
            <button onClick={clickHandler}>추가</button>
            <ul>
                {eating.map((item,idx) => (
                    <li key={idx}>{item}</li>
                ))}
            </ul>
        </div>
    )
}


