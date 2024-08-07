import { useEffect, useRef } from "react";

function App() {
  const ref = useRef<HTMLInputElement>(null);

  // after renderer => we use useEffect(() => {}) to make component pure
  useEffect(() => {
    if (ref.current) ref.current.focus();
  });

  useEffect(() => {
    document.title = "React App";
  });

  return (
    <>
      <input ref={ref} type="text" className="form-control"></input>
    </>
  );
}

export default App;
