import DataList from "./data-list";
import { useMediaQuery } from "react-responsive";
import LinkList from "./link-list";

const Output = ({ data }) => {
  const desktop = useMediaQuery({ minWidth: 1024 });
  const formatDate = (joinDate) => {
    const date = new Date(joinDate);
    return new Intl.DateTimeFormat("en-UK", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    })
      .format(date)
      .split(",")
      .reverse()
      .join(" ");
  };

  if (data && !desktop)
    return (
      <>
        <main className="flex flex-col gap-8 rounded-xl bg-white shadow-md ~sm/md:~px-5/8 ~sm/md:~py-8/10 dark:bg-lightBlack dark:shadow-none">
          <div className="flex flex-col gap-8">
            <div className="flex items-center ~sm/md:~gap-3/6">
              <img
                className="h-fit rounded-full object-contain ~sm/md:~w-14/28"
                src={data.avatar_url}
              />
              <div className="flex flex-col gap-1">
                <div className="flex flex-col">
                  <span className="font-semibold ~sm/md:~text-base/3xl">
                    {data.name}
                  </span>
                  <span className="text-blue ~sm/md:~text-sm/base">
                    @{data.login}
                  </span>
                </div>
                <span className="~sm/md:~text-sm/base">
                  Joined {formatDate(data.created_at)}
                </span>
              </div>
            </div>
            {data.bio && <p>{data.bio}</p>}
          </div>
          <DataList data={data} />
          <LinkList data={data} />
        </main>
      </>
    );
  else if (data && desktop)
    return (
      <>
        <main className="flex gap-6 rounded-xl bg-white shadow-md ~sm/md:~px-5/8 ~sm/md:~py-8/10 dark:bg-lightBlack dark:shadow-none">
          <img
            className="h-fit rounded-full object-contain ~sm/md:~w-14/28"
            src={data.avatar_url}
          />
          <div className="flex w-full flex-col gap-8">
            <div className="flex flex-col gap-4">
              <div className="flex items-center ~sm/md:~gap-3/6">
                <div className="flex w-full justify-between gap-1">
                  <div className="flex flex-col">
                    <span className="font-semibold ~sm/md:~text-base/3xl">
                      {data.name}
                    </span>
                    <span className="text-blue ~sm/md:~text-sm/base">
                      @{data.login}
                    </span>
                  </div>
                  <span className="~sm/md:~text-sm/base">
                    Joined {formatDate(data.created_at)}
                  </span>
                </div>
              </div>
              {data.bio === null ? (
                <p className="text-darkWhite dark:text-grayBlue">
                  This profile has no bio
                </p>
              ) : (
                <p>{data.bio}</p>
              )}
            </div>
            <DataList data={data} />
            <LinkList data={data} />
          </div>
        </main>
      </>
    );
};

export default Output;
