const Input = ({ onSubmit, username, setUsername, error }) => {
  return (
    <>
      <form
        noValidate
        onSubmit={onSubmit}
        className="flex rounded-2xl bg-white py-2 pr-2 shadow-md ~sm/md:~pl-4/8 dark:bg-lightBlack dark:shadow-none"
      >
        <input
          className="flex w-full bg-search bg-mobile bg-left bg-no-repeat focus:outline-none ~sm/md:~pl-8/10 ~sm/lg:~text-base/lg ~sm/lg:placeholder:~text-sm/lg dark:bg-lightBlack dark:placeholder:text-darkWhite"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Search Github username…"
        />
        {error && <span>Not found</span>}
        <button
          className="rounded-xl bg-blue py-3 font-semibold text-white shadow-sm ~sm/md:~text-xs/base ~sm/md:~px-3/6 dark:shadow-none"
          type="submit"
        >
          Search
        </button>
      </form>
    </>
  );
};

export default Input;
