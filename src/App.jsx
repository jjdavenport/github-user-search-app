import Header from "./components/header";
import Output from "./components/output";
import Input from "./components/input";
import { useEffect, useState } from "react";

function App() {
  const [username, setUsername] = useState("octocat");
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchData();
    setUsername("");
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const result = await response.json();
      setData(result);
    } catch (error) {
      setError(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
    console.log(data, username);
  };

  return (
    <>
      <div className="flex h-full min-h-screen flex-col gap-10 bg-darkWhite p-6 font-custom text-base text-grayBlue transition-colors duration-300 ease-in-out dark:bg-black dark:text-white">
        <Header />
        <div className="flex flex-col gap-4">
          <Input
            error={error}
            username={username}
            setUsername={setUsername}
            onSubmit={handleSubmit}
          />
          <Output data={data} />
        </div>
      </div>
    </>
  );
}

export default App;
