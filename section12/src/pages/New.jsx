import Button from '../components/Button';
import Editor from '../components/Editor';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { DiaryDispatchContext } from '../App';
import usePageTitle from '../hooks/usePageTitle';

const New = () => {
  const { onCreated } = useContext(DiaryDispatchContext);
  const nav = useNavigate();

  // 페이지 타이틀 변경
  usePageTitle('새 일기 쓰기');

  const onSubmit = (input) => {
    onCreated(input.createdDate.getTime(), input.emotionId, input.content);
    nav('/', { replace: true });
  };

  return (
    <>
      <Header
        title='새 일기 쓰기'
        leftChild={
          <Button
            text={'< 뒤로가기'}
            onClick={() => {
              nav(-1);
            }}
          />
        }
      />
      <Editor onSubmit={onSubmit} />
    </>
  );
};
export default New;
