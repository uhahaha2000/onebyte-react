import { getEmotionImage } from "../util/get-emotion-image";
import Button from "./Button";
import "./DiaryItem.css";

const DiaryItem = () => {  
const emotionId = 4;


  return (
    <div className='diary_item'>
      <div className={`img_section img_section_${emotionId}`}>
        <img src={getEmotionImage(emotionId)} alt='이모티콘' />
      </div>
      <div className='info_section'>
        <div className='created_date'>{new Date().toLocaleDateString()}</div>
        <div className='content'>일기 컨텐츠ㅡㅡ</div>
      </div>
      <div className='button_section'>
        <Button text={'수정하기'} type='default' />
      </div>
    </div>
  );
}

export default DiaryItem;