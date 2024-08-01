import Alert from "./components/Alert";

function App() {
  return (
    <>
      <Alert>
        <b>Method 1</b>
      </Alert>
      <Alert children={<b>Method 2</b>}></Alert>
    </>
  );
}

export default App;
