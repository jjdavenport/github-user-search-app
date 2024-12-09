const DataLink = ({ data, svg, className }) => {
  return (
    <li className={`flex items-center gap-3 ~sm/md:~text-sm/base ${className}`}>
      <div className="flex w-6 items-start">{svg}</div>
      {data === null || data === "" ? (
        <span className="text-darkWhite dark:text-grayBlue">Not Available</span>
      ) : (
        <a
          href={data}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          {data}
        </a>
      )}
    </li>
  );
};

export default DataLink;
