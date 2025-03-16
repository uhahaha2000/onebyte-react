
import './App.css'
import { useReducer, useRef, createContext } from 'react';
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

const mockData = [
  {
    id: 1,
    createdDate: new Date().getTime(),
    emotionId: 1,
    content: '1번 일기 - 오늘은 날씨가 좋아서 기분이 좋았다.',
  },
  {
    id: 2,
    createdDate: new Date().getTime(),
    emotionId: 2,
    content: '2번 일기 - 오늘은 춥다.',
  },
];

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return [action.data, ...state];
    case 'UPDATE':
      return state.map((item) =>
        String(item.id) === String(action.data.id) ? action.data : item
      );
    case 'DELETE':
      return state.filter((item) => String(item.id) !== String(action.id));
    default:
      return state;
  }
}

const DiaryStateContext = createContext();
const DiaryDispatchContext = createContext();

function App() {
  const [data, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

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

  return (
    <>
      {/* <Header
        title='일기장'
        leftChild={
          <Button
            text={'<'}
            type={'default'}
            onClick={() => {
              console.log('123456789 클릭');
            }}
          />
        }
        rightChild={
          <Button
            text={'>'}
            type={'default'}
            onClick={() => {
              console.log('123456789 클릭');
            }}
          />
        }
      /> */}

      <button
        onClick={() => {
          onCreated(new Date().getTime(), 5, '냐냐냐');
        }}
      >
        일기추가테스트
      </button>
      <button
        onClick={() => {
          onUpdate(1, new Date().getTime(), 5, '수정이야');
        }}
      >
        일기수정테스트
      </button>
      <button
        onClick={() => {
          onDelete(1, new Date().getTime(), 5, '수정이야');
        }}
      >
        일기삭제테스트
      </button>

      <DiaryStateContext.Provider value={{ data }}>
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
