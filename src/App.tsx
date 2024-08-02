import "./App.css";
import Button from "./components/Button/Button";

function App() {
  const handleButtonClick = () => {
    console.log("CHILD TO PARENT BUTTON CLICK===== ");
  };

  return (
    <>
      <Button
        children="Button 1"
        color="primary"
        onButtonClick={handleButtonClick}
      />

      <br />
      <br />

      <Button
        children="Button 2"
        color="link"
        onButtonClick={handleButtonClick}
      />
    </>
  );
}

export default App;
