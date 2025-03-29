import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Button from '../components/Button';
import Editor from '../components/Editor';

import { useContext } from 'react';
import { DiaryDispatchContext } from '../App';
import useDiary from '../hooks/useDiary';
import usePageTitle from '../hooks/usePageTitle';

const Edit = () => {
  const params = useParams();
  const nav = useNavigate();
  const { onDelete, onUpdate } = useContext(DiaryDispatchContext);
  const curDiaryItem = useDiary(params.id);

  // 페이지 타이틀 변경
  usePageTitle(`${params.id}번 일기 수정`);

  const onClickDelete = () => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      // 삭제 로직
      onDelete(params.id);
      nav('/', { replace: true });
    }
  };

  const onSubmit = (input) => {
    if (window.confirm('수정하시겠습니까?')) {
      onUpdate(
        params.id,
        input.createdDate.getTime(),
        input.emotionId,
        input.content
      );
      nav('/', { replace: true });
    }
  };
  return (
    <>
      <Header
        title='일기 수정하기'
        leftChild={
          <Button
            text={'< 뒤로가기'}
            onClick={() => {
              nav(-1);
            }}
          />
        }
        rightChild={
          <Button text={'삭제하기'} type='negative' onClick={onClickDelete} />
        }
      />
      <Editor initData={curDiaryItem} onSubmit={onSubmit} />
    </>
  );
};
export default Edit;
