function Label({ labelName, children }) {
  return (
    <div className="form-group">
      <label> {labelName} </label>
      {children}
    </div>
  );
}

export default Label;
