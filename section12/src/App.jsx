
import './App.css'
import { useReducer, useRef, createContext, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import New from './pages/New';
import Diary from './pages/Diary';
import Notfound from './pages/Notfound';

import Button from './components/Button';
import Header from './components/Header';
import Edit from './pages/Edit';

// 1. / 홈
// 2. /new 새로운 일기 작성
// 3. /diary 일기 목록

// const mockData = [
//   {
//     id: 1,
//     createdDate: new Date('2025-03-19').getTime(),
//     emotionId: 1,
//     content: '1번 일기 - 오늘은 날씨가 좋아서 기분이 좋았다.',
//   },
//   {
//     id: 2,
//     createdDate: new Date('2025-03-18').getTime(),
//     emotionId: 2,
//     content: '2번 일기 - 오늘은 춥다.',
//   },
//   {
//     id: 3,
//     createdDate: new Date('2025-02-03').getTime(),
//     emotionId: 3,
//     content: '3번 일기 - 오늘은 춥다.',
//   },
// ];

function reducer(state, action) {
  let nextState;
  switch (action.type) {
    case 'INIT': {
      return action.data;
    }
    case 'CREATE': {
      nextState = [action.data, ...state];
      break
    }
    case 'UPDATE': {
      nextState = state.map((item) =>
        String(item.id) === String(action.data.id) ? action.data : item
      );
      break;
    }
    case 'DELETE': {
      nextState = state.filter((item) => String(item.id) !== String(action.id));
      break;
    }
    default: {
      return state;
    }
  }
  localStorage.setItem('diary', JSON.stringify(nextState));
  return nextState;
}

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, dispatch] = useReducer(reducer, []);
  const idRef = useRef(3);

  // 데이터 초기화
  useEffect(() => {
    const storedData = localStorage.getItem('diary');
    if(!storedData) {
      setIsLoading(false);
      return;
    }
    const parsedData = JSON.parse(storedData);
    // 배열이 아니면 초기화 하지 않음
    if (!Array.isArray(parsedData)) { 
      setIsLoading(false);
      return;
    }
    let maxId = 0;
    parsedData.forEach((item) => {
      if(Number(item.id) > maxId) {
        maxId = Number(item.id);
      }
    });

    // 최대 id 값 + 1
    idRef.current = maxId + 1;

    dispatch({
      type: 'INIT',
      data: parsedData,
    });
    setIsLoading(false);
  }, []);

  // 새로운 일기 추가
  const onCreated = (createdDate, emotionId, content) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  // 기존 일기 수정
  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch({
      type: 'UPDATE',
      data: {
        id,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  // 기존 일기 삭제
  const onDelete = (id) => {
    dispatch({
      type: 'DELETE',
      id,
    });
  };

  if (isLoading) {
    return <div>데이터 로딩중입니다.!</div>; 
  }
  return (
    <>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider
          value={{ onCreated, onUpdate, onDelete }}
        >
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/new' element={<New />} />
            <Route path='/edit/:id' element={<Edit />} />
            <Route path='/diary/:id' element={<Diary />} />
            <Route path='*' element={<Notfound />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  );
};


export default App
