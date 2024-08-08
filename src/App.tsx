import { useEffect } from "react";

function App() {
  const connect = () => console.log("connecting");
  const disconnect = () => console.log("disconnecting");

  useEffect(() => {
    connect();

    return disconnect();
  });

  return (
    <>
      <div>Effect clean up</div>
    </>
  );
}

export default App;
