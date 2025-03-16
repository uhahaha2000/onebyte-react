import Button from '../components/Button';
import DiaryList from '../components/DiaryList';
import Header from '../components/Header';

const Home = () => {
  return (
    <div>
      <Header
        title={'2025년 3월'}
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

      <DiaryList></DiaryList>
    </div>
  );
};
export default Home;
