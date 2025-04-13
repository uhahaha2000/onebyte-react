import { useState } from 'react';
import './TodoListItem.css';

function TodoListItem({ id, content, date, done, onUpdate, onRemove }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState(content);

  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  const onClickDelete = () => {
    onRemove(id);
  };

  const onClickModify = () => {
    setIsEditing(true);
  };

  const onSaveEdit = () => {
    onUpdate(id, editContent);
    setIsEditing(false);
  };

  const onCancelEdit = () => {
    setEditContent(content);
    setIsEditing(false);
  };

  return (
    <>
      <div className='todo-list-item'>
        <input
          type='checkbox'
          id={id}
          checked={done}
          onChange={onChangeCheckbox}
        />
        {isEditing ? (
          <>
            <input
              type='text'
              value={editContent}
              onChange={(e) => setEditContent(e.target.value)}
              className='edit-input'
            />
            <button type='button' className='btn_save' onClick={onSaveEdit}>
              저장
            </button>
            <button type='button' className='btn_cancel' onClick={onCancelEdit}>
              취소
            </button>
          </>
        ) : (
          <>
            <label className='todo_text' htmlFor={id}>
              {content}
            </label>
            <span className='date'>{new Date(date).toLocaleDateString()}</span>
            <button type='button' className='btn_modify' onClick={onClickModify}>
              수정
            </button>
            <button type='button' className='btn_delete' onClick={onClickDelete}>
              삭제
            </button>
          </>
        )}
      </div>
    </>
  );
}

export default TodoListItem;
