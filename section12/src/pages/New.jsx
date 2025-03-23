import Button from '../components/Button';
import Editor from '../components/Editor';
import Header from '../components/Header';

const New = () => {
  return (
    <>
      <Header title='새 일기 쓰기' leftChild={<Button text={'< 뒤로가기'} />} />
      <Editor />
    </>
  );
};
export default New;
