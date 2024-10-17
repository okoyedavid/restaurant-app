function Input({ value, setValue, ...rest }) {
  return (
    <input
      className="form-control"
      value={value}
      onChange={setValue}
      {...rest}
    />
  );
}

export default Input;
