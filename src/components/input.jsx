const Input = ({ onSubmit, username, setUsername }) => {
  return (
    <>
      <form
        noValidate
        onSubmit={onSubmit}
        className="flex rounded-2xl py-2 pl-4 pr-2 dark:bg-lightBlack"
      >
        <input
          className="flex w-full bg-search bg-left bg-no-repeat pl-8 placeholder:text-sm focus:outline-none dark:bg-lightBlack dark:placeholder:text-white"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Search Github username…"
        />
        <button
          className="rounded-xl p-3 font-semibold dark:bg-blue"
          type="submit"
        >
          Search
        </button>
      </form>
    </>
  );
};

export default Input;
