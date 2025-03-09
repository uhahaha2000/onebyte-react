
import './App.css'
import Editor from './components/Editor';
import Header from './components/Header';
import List from './components/List';
import { useRef } from 'react';
import { useReducer } from 'react';


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

function reducer(state, action) { 
  switch (action.type) {
    case 'CREATE':
      return [action.data, ...state];
    case 'UPDATE':
      return state.map((item) => 
        item.id === action.targetId ?  
          { ...item, isDone: !item.isDone }
          : item
      )
    case 'REMOVE':
      return state.filter((item) => item.id !== action.targetId);
    default:
      return state;
  }
}


function App() {
  const [todos,dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(4);

  const onCreate = (content) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        content,
        isDone: false,
        date: new Date().getTime(),
      }
    });
  };

  const onUpdate = (targetId) => {
    dispatch({
      type: 'UPDATE',
      targetId: targetId
    });
  };

  const onRemove = (targetId) => {
    dispatch({
      type: 'REMOVE',
      targetId: targetId
    });
  }

  return (
    <div className='App'>
      {/* <Exam /> */}
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onRemove={onRemove} />
    </div>
  );
}

export default App;
