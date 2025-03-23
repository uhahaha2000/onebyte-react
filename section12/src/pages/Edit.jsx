import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Button from '../components/Button';
import Editor from '../components/Editor';

import { useContext, useEffect, useState } from 'react';
import { DiaryDispatchContext, DiaryStateContext } from '../App';

const Edit = () => {
  const params = useParams();
  const nav = useNavigate();
  const { onDelete, onUpdate } = useContext(DiaryDispatchContext);
  const data = useContext(DiaryStateContext); // 전체 데이터 불러왔다!
  const [curDiaryItem, setCurDiaryItem] = useState();

  useEffect(() => {
    const currentDiaryItem = data.find(
      (item) => String(item.id) === String(params.id)
    );

    if (!currentDiaryItem) {
      window.alert('존재하지 않는 일기입니다.');
      nav('/', { replace: true });
    }

    setCurDiaryItem(currentDiaryItem);
  }, [params.id]);

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
