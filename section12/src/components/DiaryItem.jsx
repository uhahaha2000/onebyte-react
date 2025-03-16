import { getEmotionImage } from "../util/get-emotion-image";
import Button from "./Button";
import "./DiaryItem.css";
import { useNavigate } from 'react-router-dom';

const DiaryItem = ({ id, emotionId, createdDate, content }) => {
  const nav = useNavigate();
  return (
    <div className='diary_item'>
      <div
        className={`img_section img_section_${emotionId}`}
        onClick={() => nav(`/diary/${id}`)}
      >
        <img src={getEmotionImage(emotionId)} alt='이모티콘' />
      </div>
      <div className='info_section' onClick={() => nav(`/diary/${id}`)}>
        <div className='created_date'>
          {new Date(createdDate).toLocaleDateString()}
        </div>
        <div className='content'>{content}</div>
      </div>
      <div className='button_section'>
        <Button
          text={'수정하기'}
          type='default'
          onClick={() => nav(`/edit/${id}`)}
        />
      </div>
    </div>
  );
};

export default DiaryItem;