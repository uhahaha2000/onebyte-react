const Viewer = ({ count }) => {
  return (
    <div>
      <div>현재 카운트: </div>
      <span className='count'>{count}</span>
    </div>
  );
};
export default Viewer;