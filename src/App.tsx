import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisible] = useState(false);

  return (
    <>
      {alertVisible && (
        <Alert
          children="Button clicked successfully"
          onCloseClick={() => setAlertVisible(false)}
        />
      )}
      <Button
        color="success"
        children="Button"
        onButtonClick={() => setAlertVisible(true)}
      />
    </>
  );
}

export default App;
