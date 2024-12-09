const DataList = ({ data }) => {
  return (
    <>
      <ul className="flex justify-evenly rounded-lg bg-darkWhite py-5 ~sm/md:~gap-2/0 ~sm/md:~px-5/10 dark:bg-black">
        <li className="flex flex-col items-center ~sm/md:~gap-2/0 md:w-full md:items-start">
          <span className="~sm/md:~text-xs/base dark:text-darkWhite">
            Repos
          </span>
          <span className="font-semibold ~sm/md:~text-base/2xl">
            {data.public_repos}
          </span>
        </li>
        <li className="flex flex-col items-center ~sm/md:~gap-2/0 md:w-full md:items-start">
          <span className="~sm/md:~text-xs/base dark:text-darkWhite">
            Followers
          </span>
          <span className="font-semibold ~sm/md:~text-base/2xl">
            {data.followers}
          </span>
        </li>
        <li className="flex flex-col items-center ~sm/md:~gap-2/0 md:w-full md:items-start">
          <span className="~sm/md:~text-xs/base dark:text-darkWhite">
            Following
          </span>
          <span className="font-semibold ~sm/md:~text-base/2xl">
            {data.following}
          </span>
        </li>
      </ul>
    </>
  );
};

export default DataList;
