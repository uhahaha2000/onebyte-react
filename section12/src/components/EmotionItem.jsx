import { getEmotionImage } from "../util/get-emotion-image";
import "./EmotionItem.css";


const EmotionItem = ({ emotionId, emotionName, isSelected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`emotion_item ${
        isSelected ? `emotion_item_on_${emotionId}` : ''
      }`}
    >
      <img src={getEmotionImage(emotionId)} className='emotion_img' />
      <div className='emotion_name'>{emotionName}</div>
    </div>
  );
};

export default EmotionItem;