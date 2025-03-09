
import { use } from 'react';
import './App.css'
import Editor from './components/Editor';
import Header from './components/Header';
import List from './components/List';
import { useRef, useReducer, useCallback, createContext, useMemo } from 'react';


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

// eslint-disable-next-line react-refresh/only-export-components
export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();

function App() {
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(4);

  const onCreate = useCallback((content) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        content,
        isDone: false,
        date: new Date().getTime(),
      }
    });
  }, []);

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: 'UPDATE',
      targetId: targetId
    });
  }, []);


  const onRemove = useCallback((targetId) => {
    dispatch({
      type: 'REMOVE',
      targetId: targetId
    })
  }, []);

  const memoizedDispatch = useMemo(() => { 
    return { onCreate, onUpdate, onRemove };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='App'>
      {/* <Exam /> */}
      <Header />
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider value={memoizedDispatch}>
          <Editor />
          <List todos={todos} onUpdate={onUpdate} onRemove={onRemove} />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
}

export default App;
