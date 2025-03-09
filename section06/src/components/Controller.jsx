const Controller = ({ onClickButton }) => {
  const buttons = [-100, -10, -1, 1, 10, 100];

  return (
    <div className='controller'>
      {buttons.map((value) => (
        <button key={value} onClick={() => onClickButton(value)}>
          {value > 0 ? `+${value}` : value}
        </button>
      ))}
    </div>
  );
};

export default Controller;
