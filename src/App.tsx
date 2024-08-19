import { useReducer } from "react";
import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";
import AuthContext from "./state-management/context/authContext";
import TasksContext from "./state-management/context/tasksContext";
import authReducer from "./state-management/reducers/authReducer";
import tasksReducer from "./state-management/reducers/tasksReducer";

function App() {
  const [tasks, tasksDispatch] = useReducer(tasksReducer, []);
  const [user, authDispatch] = useReducer(authReducer, "");

  return (
    <AuthContext.Provider value={{ user, dispatch: authDispatch }}>
      <TasksContext.Provider value={{ tasks, dispatch: tasksDispatch }}>
        <NavBar />
        <HomePage />
      </TasksContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
