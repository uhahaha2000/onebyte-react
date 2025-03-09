const Button = ({ children, text, color = "black" }) => { 

  const onClick = (e) => { 
    console.log(e,text);
  }

  return (
    <button
      style={{ color: color }}
      onClick={onClick}
    >
      {text}
      {children}
    </button>
  );
}

export default Button;