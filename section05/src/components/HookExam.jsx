import React, { useState } from 'react';

import useInput from './../hooks/useInput';

const HookExam = () => { 
  const [input, onChange] = useInput();
  const [input2, onChange2] = useInput();
  return (
    <div>
      <input type='text' name="one" value={input} onChange={onChange} />
      <input type='text' name="two" value={input2} onChange={onChange2} />
    </div>
  );
}

export default HookExam;