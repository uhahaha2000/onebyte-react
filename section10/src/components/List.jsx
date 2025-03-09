import { useState, useMemo } from 'react';
import './List.css';
import TodoItem from './TodoItem';

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

  const { totalCount, doneCount, notDoneCount } =
    useMemo(() => {
      console.log('useMemo');
      const totalCount = todos.length;
      const doneCount = todos.filter((todo) => todo.isDone).length;
      const notDoneCount = totalCount - doneCount;
      return {
        totalCount,
        doneCount,
        notDoneCount,
      };
    }, [todos]);


  

  return (
    <div className='list'>
      <h4>Todo List</h4>
      <div>
        <div>전체: {totalCount}</div>
        <div>완료: {doneCount}</div>
        <div>미완료: {notDoneCount}</div>
      </div>

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
