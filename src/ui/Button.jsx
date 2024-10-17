function Button({ label, className, handleClick }) {
  return (
    <button onClick={handleClick} className={className}>
      {label}
    </button>
  );
}

export default Button;
