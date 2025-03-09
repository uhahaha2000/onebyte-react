import "./Header.css";
import {memo} from "react";
 
const Header = () => {
  return (
    <div className="header">
      <h1>오늘은!</h1>
      <strong className="today">{ new Date().toDateString()}</strong>
    </div>
  );
};

export default memo(Header);
