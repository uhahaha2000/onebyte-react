import { useState, useRef } from 'react';


const Register = () => {
  const [input, setInput] = useState({
    name: '',
    birth: '',
    country: '',
    bio: '',
  });
  const countRef = useRef(0);
  const inputRef = useRef();
  
  const onChange = (e) => {
    countRef.current++;

    console.log(countRef.current);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  const onSubmit = () => { 
    if(input.name === '') {
      inputRef.current.focus();
    }
  }

  return (
    <>  
      <div>
        <input
          ref={inputRef}
          name='name'
          type='text'
          value={input.name}
          placeholder={'이름'}
          onChange={onChange}
        />
      </div>
      <div>
        <input
          name='birth'
          type='date'
          value={input.birth}
          placeholder={'생일'}
          onChange={onChange}
        />
      </div>
      <div>
        <select          
          id=''
          name='country'
          onChange={onChange}
          value={input.country}
        >
          <option>선택</option>
          <option value='kr'>한국</option>
          <option value='us'>미국</option>
          <option value='uk'>영국</option>
        </select>
      </div>

      <div>
        <textarea
          value={input.bio}
          name='bio'
          onChange={onChange}
        />
      </div>
      <button onClick={onSubmit}>제출</button>
    </>
  );
};

export default Register;
