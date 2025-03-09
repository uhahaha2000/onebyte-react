import { useState } from "react";

function useInput() {
  const [input, setInput] = useState(0);
  const onChange = (e) => {
    setInput(e.target.value);
    console.log(e.target.name, input);
  };
  
  return [input, onChange];
}

export default useInput;