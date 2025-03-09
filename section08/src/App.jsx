
import './App.css'
import { useState } from 'react';
import Editor from './components/Editor';
import Header from './components/Header';
import List from './components/List';
import { useRef } from 'react';


const mockData = [
  {
    id: 1,
    content: 'React 공부하기',
    isDone: true,
    date: new Date().getTime(),
  },
  {
    id: 2,
    content: '밥먹기',
    isDone: false,
    date: new Date().getTime(),
  },
  {
    id: 3,
    content: '자바스크립트 공부하기',
    isDone: false,
    date: new Date().getTime(),
  },
];

function App() {
  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(4);

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      content: content,
      isDone: false,
      date: new Date().getTime(),
    };
    setTodos([newTodo, ...todos]);
  };

  const onUpdate = (targetId) => {
    // 인수: todos 배열에서 targetId와 일치하는 id를 갖는 요소의 isDone 값만 딱 바꾼 새로운 배열
    setTodos(
      todos.map((todo) => 
        todo.id === targetId ?
          {...todo, isDone: !todo.isDone}
          : todo
      )
    );
  };

  const onRemove = (targetId) => {
    // 인수: todos 배열에서 targetId와 일치하는 id를 갖는 요소만 삭제한 새로운 배열
    setTodos(todos.filter((todo) => todo.id !== targetId));
  }
   

  return (
    <div className='App'>
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onRemove={onRemove} />
    </div>
  );
}

export default App;
