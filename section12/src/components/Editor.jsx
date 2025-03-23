import Button from "./Button";
import "./Editor.css";
import EmotionItem from "./EmotionItem";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

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

const getStringedDate = (targetDate) => {
  // YYYY-MM-DD
  let year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate();

  if (month < 10) {
    month = `0${month}`;
  }
  if (date < 10) {
    date = `0${date}`;
  }
  return `${year}-${month}-${date}`;
};

const Editor = ({ initData, onSubmit }) => {
  const [input, setInput] = useState({
    createdDate: new Date(),
    emotionId: 3,
    content: '',
  });

  const onChangeInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === 'createdDate') {
      value = new Date(value);
    }

    setInput({
      ...input,
      [name]: value,
    });
  };

  const nav = useNavigate();

  useEffect(() => {
    if (initData) {
      setInput({
        ...initData,
        createdDate: new Date(Number(initData.createdDate)),
      });
    }
  }, [initData]);

  const onClickSubmitButton = () => {
    onSubmit(input);
  };

  return (
    <div className='editor'>
      <section className='date_section'>
        <div className='section_title'>오늘의 날짜</div>
        <input
          name='createdDate'
          onChange={onChangeInput}
          type='date'
          value={getStringedDate(input.createdDate)}
        />
      </section>
      <section className='emotion_section'>
        <div className='section_title'>오늘의 감정</div>
        <div className='emotion_list_wrapper'>
          {emotionList.map((emotion) => (
            <EmotionItem
              onClick={() => {
                onChangeInput({
                  target: {
                    name: 'emotionId',
                    value: emotion.emotionId,
                  },
                });
              }}
              key={emotion.emotionId}
              {...emotion}
              isSelected={emotion.emotionId === input.emotionId}
            />
          ))}
        </div>
      </section>
      <section className='content_section'>
        <div className='section_title'>오늘의 일기</div>
        <textarea
          className='content_text'
          name='content'
          value={input.content}
          onChange={onChangeInput}
        />
      </section>
      <section className='button_section'>
        <Button
          text={'취소하기'}
          onClick={() => {
            nav(-1);
          }}
        ></Button>
        <Button
          text={'작성완료'}
          type='passive'
          onClick={onClickSubmitButton}
        />
      </section>
    </div>
  );
};

export default Editor;