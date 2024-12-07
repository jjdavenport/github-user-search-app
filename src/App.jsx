import Header from "./components/header";
import Output from "./components/output";
import Input from "./components/input";
import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const fetchData = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.log(error);
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
      <div>
        <Header />
        <Input
          username={username}
          setUsername={setUsername}
          onSubmit={handleSubmit}
        />
        <Output data={data} />
      </div>
    </>
  );
}

export default App;
