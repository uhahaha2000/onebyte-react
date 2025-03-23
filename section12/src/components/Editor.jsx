import Button from "./Button";
import "./Editor.css";
import EmotionItem from "./EmotionItem";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { emotionList } from '../util/constants';
import { getStringedDate } from '../util/get-stringed-date';

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