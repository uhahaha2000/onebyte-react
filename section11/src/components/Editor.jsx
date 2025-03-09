import { useState } from "react";
import "./Editor.css";
import { useRef, useContext } from "react";
import { TodoDispatchContext } from "../App";

const Editor = () => {
  const { onCreate } = useContext(TodoDispatchContext);

  const [content, setContent] = useState('');
  const contentRef = useRef();
  
  const onChangeContent = (e) => {
    setContent(e.target.value);
  }
  
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  }

  const onSubmit = () => { 
    if (content === '') {
      contentRef.current.focus();
      return;
    }
    onCreate(content);
    setContent('');
  }


  return (
    <div className='editor'>
      <input
        ref={contentRef}
        type='text'
        placeholder='새로운 TODO'
        value={content}
        onChange={onChangeContent}
        onKeyDown={onKeyDown}
      />
      <button className='btn_add' onClick={onSubmit}>
        추가
      </button>
    </div>
  );
};

export default Editor;
