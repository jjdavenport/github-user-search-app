const DataItem = ({ data, svg }) => {
  return (
    <li className="flex items-center gap-3 text-sm">
      <div className="flex w-6 items-start">{svg}</div>
      {data === null ? (
        <span className="text-darkWhite dark:text-grayBlue">Not Available</span>
      ) : typeof data === "string" && data.startsWith("http") ? (
        <a
          href={data}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          {data}
        </a>
      ) : (
        <span>{data}</span>
      )}
    </li>
  );
};

export default DataItem;
