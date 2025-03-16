
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import New from './pages/New';
import Diary from './pages/Diary';
import Notfound from './pages/Notfound';

import Button from './components/Button';
import Header from './components/Header';
import Edit from './pages/Edit';
import { useReducer } from 'react';

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
  return state;
}

function App() {
  const [data, dispatch] = useReducer(reducer, mockData);

  return (
    <>
      <Header
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
      />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/new' element={<New />} />
        <Route path='/edit/:id' element={<Edit />} />
        <Route path='/diary/:id' element={<Diary />} />
        <Route path='*' element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App
