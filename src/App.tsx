import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    // using async and await
    const fecthUsers = async () => {
      try {
        const res = await axios.get<User[]>(
          "https://jsonplaceholder.typicode.com/users"
        );

        console.log("1 res === ", res);
        console.log("2 users === ", users);
        setUsers(res.data);
      } catch (err) {
        console.log("err ==== ", err);
        setError((err as AxiosError).message);
      }
    };

    fecthUsers();

    // using promise
    // axios
    //   .get<User[]>("https://jsonplaceholder.typicode.com/users2")
    //   .then((res) => {
    //     console.log("1 res === ", res);
    //     console.log("2 users === ", users);
    //     setUsers(res.data);
    //   })
    //   .catch((err: AxiosError) => {
    //     console.log("err ==== ", err);
    //     setError(err.message);
    //   });
  }, []);

  return (
    <>
      <h1>Fetch data using axios library</h1>

      {error && <p className="text-danger">{error}</p>}

      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
