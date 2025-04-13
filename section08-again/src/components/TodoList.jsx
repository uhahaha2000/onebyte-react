import './TodoList.css';
import TodoListItem from './TodoListItem';

function TodoList() {
  return (
    <>
      <input type="text" className='search_input' placeholder='검색어를 입력하세요' />

      <div className="todo_list">
        <div className='title'>Todo List</div>
        
        <TodoListItem></TodoListItem>
        
      </div>
    </>
  );
}

export default TodoList;
