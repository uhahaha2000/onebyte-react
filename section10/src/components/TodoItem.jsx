import "./TodoItem.css";
import { memo } from "react";

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


// 고차 컴포넌트 (HOC)
// export default memo(TodoItem, (prevProps, nextProps) => {
//   // 반환값에 따라, props가 바뀌었는지 안바뀌었는지 판단
//   // true: Props 안바뀜 => 리렌더링 안함
//   // false: Props 바뀜 => 리렌더링

//   if (prevProps.id !== nextProps.id) return false;
//   if (prevProps.isDone !== nextProps.isDone) return false;
//   if (prevProps.content !== nextProps.content) return false;
//   if (prevProps.date !== nextProps.date) return false;

//   return true;
//  });

export default memo(TodoItem);
