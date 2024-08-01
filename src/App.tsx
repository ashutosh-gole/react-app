import ListGroup from "./components/ListGroup";

function App() {
  let states = [
    "Maharashtra",
    "Goa",
    "Karnataka",
    "Uttar Pradesh",
    "Gujrat",
    "Madhy Pradesh",
    "Rajsthan",
    "Odisa",
    "Uttarakhand",
  ];
  let heading = "List Group - States - Passing Functions Via Props";

  const handleSelectItem = (index: number, state: string) => {
    console.log("CHILD TO PARENT index, state===== ", index, state);
  };

  return (
    <>
      <h1>CHILD TO PARENT METHOD 1</h1>
      <ListGroup
        states={states}
        heading={heading}
        onSelectItem={(index, state) => handleSelectItem(index, state)}
      />

      <h1>CHILD TO PARENT METHOD 2</h1>
      <ListGroup
        states={states}
        heading={heading}
        onSelectItem={handleSelectItem}
      />
    </>
  );
}

export default App;
