const Input = ({ onSubmit, username, setUsername }) => {
  return (
    <>
      <form noValidate onSubmit={onSubmit}>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Search Github username..."
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
};

export default Input;
