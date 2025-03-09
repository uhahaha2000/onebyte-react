import "./TodoItem.css";

const TodoItem = ({ id, isDone, content, date, onUpdate, onRemove }) => {
  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  const onRemoveItem = () => {
    onRemove(id);
  }
  return (
    <div className='todo_item'>
      <input type='checkbox' checked={isDone} onChange={onChangeCheckbox} />
      <div className='content'>{content}</div>
      <div className='date'>{new Date(date).toDateString()}</div>
      <button className='btn_remove' onClick={onRemoveItem}>
        삭제
      </button>
    </div>
  );
};

export default TodoItem;
