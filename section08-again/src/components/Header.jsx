import './Header.css';

function Header() {
  return (
    <>
      <div className="header">
        <h1>오늘은!</h1>
        <strong className="today">{new Date().toDateString()}</strong>
      </div>
    </>
  );
}

export default Header;
