import axios, { AxiosError, CanceledError } from "axios";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      .then((res) => {
        setUsers(res.data);
        setIsLoading(false);
      })
      .catch((err: AxiosError) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });

    return () => controller.abort();
  }, []);

  const deleteUser = (user: User) => {
    // backup of original users
    const originalUsers = [...users];

    setUsers(users.filter((userData) => userData.id != user.id));

    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${user.id}`)
      .catch((err) => {
        setError(err.message);
        // if error occur set to original users
        setUsers(originalUsers);
      });
  };

  const addUser = () => {
    // backup of original users
    // const originalUsers = [...users];

    // create a temporary ID for the new user
    const tempId = Date.now();

    const newUser: User = {
      id: tempId,
      name: "Ashutosh G",
      email: "abc@gmail.com",
      phone: "21324324532",
    };

    // update the UI optimistically
    setUsers([newUser, ...users]);

    axios
      .post(`https://jsonplaceholder.typicode.com/users`, newUser)
      .then(({ data: savedUser }) => {
        // savedUser is used as alias
        // replace the temporary user with the actual user from the response
        setUsers((prevUsers) =>
          prevUsers.map((user) =>
            user.id === tempId ? { ...savedUser } : user
          )
        );
      })
      .catch((err) => {
        setError(err.message);
        // revert optimistic update if the request fails
        // setUsers(originalUsers);
        // or
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== tempId));
      });

    // Why Use prevUsers?
    // Using prevUsers (as in the function-based update) is a safer approach because it guarantees
    // you're working with the most current state. If you simply rely on the users array directly, there’s
    // a slight chance you might be working with an outdated state, especially in situations with rapid or
    // concurrent updates.

    // Conclusion:
    // prevUsers always holds the latest state at the moment the update function is executed.
    // Using the function form of setUsers is recommended when the new state depends on the
    // current state, as it avoids potential bugs from stale state.
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        <h1>USERS - axios library - delete operation</h1>
      </div>

      {error && <p className="text-danger">{error}</p>}

      {isLoading && (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}

      <div className="d-flex justify-content-end mb-3">
        <button className="btn btn-primary" type="button" onClick={addUser}>
          Add User
        </button>
      </div>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <th>{user.id}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteUser(user)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
