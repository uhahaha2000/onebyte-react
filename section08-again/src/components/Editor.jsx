import { useState, useRef } from 'react';
import './Editor.css';

function Editor({ onCreate }) {
  const [content, setContent] = useState('');
  const contentRef = useRef();
  const onChange = (e) => {
    console.log(e.target.value);
    setContent(e.target.value);
  };

  const onSubmit = (e) => {
    if (content === '') {
      contentRef.current.focus();
      return;
    }
    onCreate(content);
    setContent('');
  };

  const onKeyDown = (e) => {
    if (e.key === 13) {
      onSubmit();
    }
  };

  return (
    <div className='editor'>
      <input
        ref={contentRef}
        value={content}
        onChange={onChange}
        onKeyDown={onKeyDown}
        type='text'
        className='todo_input'
        placeholder='새로운 todo'
      />
      <button type='button' className='btn_add' onClick={onSubmit}>
        추가
      </button>
    </div>
  );
}

export default Editor;
