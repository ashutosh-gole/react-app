import "./App.css";
import Like from "./components/Like";

function App() {
  const handlerIconClick = (status: boolean) => {
    console.log("CHILD TO PARENT handlerIconClick status ===== ", status);
  };

  return (
    <>
      <Like onIconClick={handlerIconClick} />
    </>
  );
}

export default App;
