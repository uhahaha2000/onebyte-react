
import './App.css'
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from './pages/Home'
import New from './pages/New'
import Diary from './pages/Diary'
import Notfound from './pages/Notfound';

import { getEmotionImage } from './util/get-emotion-image';

// 1. / 홈
// 2. /new 새로운 일기 작성
// 3. /diary 일기 목록

function App() {
  const nav = useNavigate();
  const onClick = () => {
    nav('/new');
  }

  return (
    <>
      <div>
        <img src={getEmotionImage(1)} alt='' />
        <img src={getEmotionImage(2)} alt='' />
        <img src={getEmotionImage(3)} alt='' />
        <img src={getEmotionImage(4)} alt='' />
        <img src={getEmotionImage(5)} alt='' />
      </div>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/new'>New</Link>
        <Link to='/diary'>diary</Link>
      </div>
      <button onClick={onClick}>뉴 페이지로 이동(보통 로그인)</button>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/new' element={<New />} />
        <Route path='/diary/:id' element={<Diary />} />
        <Route path='*' element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App
