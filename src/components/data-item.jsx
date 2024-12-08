const DataItem = ({ data, svg, className }) => {
  return (
    <li className={`flex items-center gap-3 ~sm/md:~text-sm/base ${className}`}>
      <div className="flex w-6 items-start">{svg}</div>
      {data === null || data === "" ? (
        <span className="text-darkWhite dark:text-grayBlue">Not Available</span>
      ) : (
        <span>{data}</span>
      )}
    </li>
  );
};

export default DataItem;
