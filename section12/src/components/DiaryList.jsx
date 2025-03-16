import Button from "./Button";
import DiaryItem from "./DiaryItem";
import "./DiaryList.css";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const DiaryList = ({ data }) => {
  const nav = useNavigate();

  const [sortType, setSortType] = useState('latest');

  const onSortChange = (e) => {
    setSortType(e.target.value);
  };

  const getSortedData = () => {
    return data.toSorted((a, b) => {
      if (sortType === 'latest') {
        return Number(b.createdDate) - Number(a.createdDate);
      } else {
        return Number(a.createdDate) - Number(b.createdDate);
      }
    });
  };

  const sortedData = getSortedData();

  return (
    <div className='diary_list'>
      <div className='menu_bar'>
        <select onChange={onSortChange} value={sortType}>
          <option value='latest'>최신순</option>
          <option value='oldest'>오래된 순</option>
        </select>
        <Button
          text={'새로운 일기 쓰기'}
          type='passive'
          onClick={() => {
            nav('/new');
          }}
        />
      </div>
      <div className='list_wrap'>
        {sortedData.map((item) => (
          <DiaryItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default DiaryList;