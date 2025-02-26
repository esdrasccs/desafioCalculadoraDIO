import React, {useState} from "react";
import "./index.css";

function Input({id, event, classname = "input"}) {
    const [valorInput, setValorInput] = useState(event);

    const inputChanche = ({event}) => {
        setValorInput(event.target.value);
    }

    return (
      <input type="text" id={id} value={valorInput} className={classname} onChange={inputChanche}/>
    );
  }
  
  export default Input;