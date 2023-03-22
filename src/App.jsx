import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./components/Card";
import Error from "./components/Error";
import Form from "./components/Form";

function App() {
  const [input, setInput] = useState("");
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState(null);
  const [error, setError] = useState(false);

  const url = "https://api.github.com/users/";

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(false);
    const fetchData = async () => {
      try {
        const responseUser = await axios(url + input);
        const responseRepos = await axios(url + input + "/repos?=sort=created");
        setUser(responseUser.data);
        setRepos(responseRepos.data);
      } catch (error) {
        setError(true);
        setUser(null);
      }
    };
    fetchData();
    setInput("");
  };

  return (
    <>
      <Form handleSubmit={handleSubmit} input={input} setInput={setInput} />
      <main>
        {error && <Error />}
        {user && <Card user={user} repos={repos} />}
      </main>
    </>
  );
}

export default App;
