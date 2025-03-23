import Button from "./Button";
import "./Editor.css";
import EmotionItem from "./EmotionItem";

const emotionList = [
  {
    emotionId: 1,
    emotionName: '완전 좋아',
  },
  {
    emotionId: 2,
    emotionName: '좋아',
  },
  {
    emotionId: 3,
    emotionName: '그럭저럭',
  },
  {
    emotionId: 4,
    emotionName: '나쁨',
  },
  {
    emotionId: 5,
    emotionName: '완전 나쁨',
  },
];

const Editor = () => {
  const emotionId = 1;
  return (
    <div className='editor'>
      <section className='date_section'>
        <div className='section_title'>오늘의 날짜</div>
        <input type='date' className='date_select' />
      </section>
      <section className='emotion_section'>
        <div className='section_title'>오늘의 감정</div>
        <div className='emotion_list_wrapper'>
          {emotionList.map((emotion) => (
            <EmotionItem
              key={emotion.emotionId}
              {...emotion}
              isSelected={emotion.emotionId === emotionId}
            />
          ))}
        </div>
      </section>
      <section className='content_section'>
        <div className='section_title'>오늘의 일기</div>
        <textarea className='content_text' />
      </section>
      <section className='button_section'>
        <Button text={'취소하기'}></Button>
        <Button text={'작성완료'} type='passive' />
      </section>
    </div>
  );
};

export default Editor;