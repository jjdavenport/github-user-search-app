const Input = ({ onSubmit, username, setUsername, error }) => {
  return (
    <>
      <form
        noValidate
        onSubmit={onSubmit}
        className="flex rounded-2xl bg-white py-2 pl-4 pr-2 dark:bg-lightBlack"
      >
        <input
          className="flex w-full bg-search bg-mobile bg-left bg-no-repeat pl-8 placeholder:text-xs focus:outline-none dark:bg-lightBlack dark:placeholder:text-white"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Search Github username…"
        />
        {error && <span>Not found</span>}
        <button
          className="rounded-xl bg-blue px-3 py-3 text-sm font-semibold text-white"
          type="submit"
        >
          Search
        </button>
      </form>
    </>
  );
};

export default Input;
