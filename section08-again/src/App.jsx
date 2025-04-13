import { useState, useRef } from 'react';

import './App.css';
import Header from './components/Header';
import Editor from './components/Editor';
import TodoList from './components/TodoList';

// 초기 Todo 데이터
const initialTodos = [
  {
    id: 1,
    content: 'react 리액트 공부하기',
    done: true,
    date: new Date().getTime(),
  },
  {
    id: 2,
    content: '노래하기',
    done: false,
    date: new Date().getTime(),
  },
  {
    id: 3,
    content: '청소하기',
    done: false,
    date: new Date().getTime(),
  },
  {
    id: 4,
    content: '밥먹기',
    done: false,
    date: new Date().getTime(),
  },
];

function App() {
  const [todos, setTodos] = useState(initialTodos);
  const idRef = useRef(5);

  // 새로운 Todo 추가
  const handleAddTodo = (content) => {
    const newTodo = {
      id: idRef.current++,
      content: content,
      done: false,
      date: new Date().getTime(),
    };
    setTodos([newTodo, ...todos]);
  };

  // Todo 업데이트 (체크박스 토글 또는 내용 수정)
  const handleUpdateTodo = (targetId, newContent) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === targetId) {
          return {
            ...todo,
            done: newContent === undefined ? !todo.done : todo.done,
            content: newContent || todo.content
          };
        }
        return todo;
      })
    );
  };

  // Todo 삭제
  const handleDeleteTodo = (targetId) => {
    setTodos(todos.filter((todo) => todo.id !== targetId));
  };

  return (
    <div className='wrap'>
      <Header />
      <Editor onCreate={handleAddTodo} />
      <TodoList 
        todos={todos} 
        onUpdate={handleUpdateTodo}
        onRemove={handleDeleteTodo} 
      />
    </div>
  );
}

export default App;
