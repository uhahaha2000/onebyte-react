import './TodoListItem.css';

function TodoListItem() {
  return (
    <>
      <div className='todo-list-item'>
        <input type='checkbox' id='todo1' />
        <label className='todo_text' htmlFor='todo1'>
          <span>할 일</span>
        </label>

        <span className='date'>2025.4.13</span>
        <button type='button' className='btn_delete'>
          삭제
        </button>
      </div>
    </>
  );
}

export default TodoListItem;
