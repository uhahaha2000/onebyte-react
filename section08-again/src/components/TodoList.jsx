import { useState } from 'react';
import './TodoList.css';
import TodoListItem from './TodoListItem';

function TodoList({ todos, onUpdate, onRemove }) {
  const [search, setSearch] = useState('');

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    if (search === '') {
      return todos;
    }
    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase())
    );
  };

  const filteredTodos = getFilteredData();
  return (
    <>
      <input
        type='text'
        className='search_input'
        placeholder='검색어를 입력하세요'
        value={search}
        onChange={onChangeSearch}
      />

      <div className='todo_list'>
        <div className='title'>Todo List</div>

        {filteredTodos.map((todo) => {
          return (
            <TodoListItem
              key={todo.id}
              {...todo}
              onUpdate={onUpdate}
              onRemove={onRemove}
            />
          );
        })}
      </div>
    </>
  );
}

export default TodoList;
