import ListGroup from "./components/ListGroup/ListGroup";

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
      <ListGroup
        states={states}
        heading={heading}
        onSelectItem={handleSelectItem}
      />
    </>
  );
}

export default App;
