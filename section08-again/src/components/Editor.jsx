import './Editor.css';

function Editor() {
  return (
    <div className='editor'>
      <input type="text" className='todo_input' placeholder='새로운 todo'/>
      <button type='button' className='btn_add'>추가</button>
    </div>
  );
}

export default Editor;
