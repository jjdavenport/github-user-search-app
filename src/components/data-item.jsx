const DataItem = ({ data, svg, link }) => {
  return (
    <>
      <li className="flex items-center gap-2">
        <div className="w-6">{svg}</div>
        {data && <span>{data}</span>}
        {link && <a href={link}>{link}</a>}
      </li>
    </>
  );
};

export default DataItem;
