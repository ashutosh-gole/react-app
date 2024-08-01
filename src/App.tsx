import Button from "./components/Button";

function App() {
  const handleButtonClick = () => {
    console.log("CHILD TO PARENT: Button Click");
  };

  return (
    <>
      {/* method 1 if you are property key name as "children" then no need to  pass key name also in Button component */}
      <Button onButtonClick={handleButtonClick}>Button 1</Button>
      <br />
      <br />
      {/* method 2 */}
      <Button
        color="success"
        children="Button 2"
        onButtonClick={handleButtonClick}
      />

      <br />
      <br />
      <Button color="link" children="Link" onButtonClick={handleButtonClick} />
    </>
  );
}

export default App;
