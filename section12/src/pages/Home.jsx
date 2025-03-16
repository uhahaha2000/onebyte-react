import { useState } from 'react';
import Button from '../components/Button';
import DiaryList from '../components/DiaryList';
import Header from '../components/Header';

const Home = () => {
  const [pivotDate, setPivotDate] = useState(new Date());

  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  };
  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  };

  return (
    <div>
      <Header
        title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
        leftChild={<Button text={'<'} onClick={onDecreaseMonth} />}
        rightChild={<Button text={'>'} onClick={onIncreaseMonth} />}
      />

      <DiaryList></DiaryList>
    </div>
  );
};
export default Home;
