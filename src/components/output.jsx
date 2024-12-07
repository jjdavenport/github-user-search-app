import companyIcon from "../assets/icon-company.svg";
import locationIcon from "../assets/icon-location.svg";
import websiteIcon from "../assets/icon-website.svg";
import twitterIcon from "../assets/icon-twitter.svg";

const Output = ({ data }) => {
  if (data)
    return (
      <>
        <main>
          <div className="flex">
            <img
              className="w-24 rounded-full object-contain"
              src={data.avatar_url}
            />
            <div className="flex flex-col gap-2">
              <span>{data.name}</span>
              <span>@{data.login}</span>
              <span>{data.created_at}</span>
            </div>
          </div>
          <p>{data.bio}</p>
          <div className="flex gap-2">
            <div className="flex flex-col">
              <span>Repos</span>
              <span>{data.public_repos}</span>
            </div>
            <div className="flex flex-col">
              <span>Followers</span>
              <span>{data.followers}</span>
            </div>
            <div className="flex flex-col">
              <span>Following</span>
              <span>{data.following}</span>
            </div>
          </div>
          <ul className="flex flex-col gap-2">
            <li className="flex gap-2">
              <img src={locationIcon} />
              <span>{data.location}</span>
            </li>
            <li className="flex gap-2">
              <img src={websiteIcon} />
              <span>{data.html_url}</span>
            </li>
            <li className="flex gap-2">
              <img src={twitterIcon} />
              <span>{data.twitter_username}</span>
            </li>
            <li className="flex gap-2">
              <img src={companyIcon} />
              <span>{data.company}</span>
            </li>
          </ul>
        </main>
      </>
    );
};

export default Output;
