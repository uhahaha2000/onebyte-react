import Button from "./Button";
import DiaryItem from "./DiaryItem";
import "./DiaryList.css";

const DiaryList = () => {  
  return (
    <div className='diary_list'>
      <div className='menu_bar'>
        <select>
          <option value='latest'>최신순</option>
          <option value='oldest'>오래된 순</option>
        </select>
        <Button text={'새로운 일기 쓰기'} type='passive' />
      </div>
      <div className='list_wrap'>
        <DiaryItem />
      </div>
    </div>
  );
}

export default DiaryList;