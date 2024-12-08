const Input = ({ onSubmit, username, setUsername, error }) => {
  return (
    <>
      <form
        noValidate
        onSubmit={onSubmit}
        className="~sm/md:~pl-4/8 flex rounded-2xl bg-white py-2 pr-2 shadow-md dark:bg-lightBlack dark:shadow-none"
      >
        <input
          className="~sm/md:placeholder:~text-sm/base ~sm/md:~pl-8/10 flex w-full bg-search bg-mobile bg-left bg-no-repeat focus:outline-none dark:bg-lightBlack dark:placeholder:text-white"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Search Github username…"
        />
        {error && <span>Not found</span>}
        <button
          className="~sm/md:~text-xs/base ~sm/md:~px-3/6 rounded-xl bg-blue py-3 font-semibold text-white shadow-sm dark:shadow-none"
          type="submit"
        >
          Search
        </button>
      </form>
    </>
  );
};

export default Input;
