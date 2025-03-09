import { useState } from "react";
import "./List.css";
import TodoItem from "./TodoItem";


const List = ({ todos, onUpdate, onRemove }) => {
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
    <div className='list'>
      <h4>Todo List</h4>
      <input
        type='text'
        placeholder='검색어를 입력하세요'
        value={search}
        onChange={onChangeSearch}
      />
      <div className='todo_list'>
        {filteredTodos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              {...todo}
              onUpdate={onUpdate}
              onRemove={onRemove}
            />
          );
        })}
      </div>
    </div>
  );
};

export default List;
