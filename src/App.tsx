import ListGroup from "./components/ListGroup";
// import ListGroupUsingFragment from "./components/ListGroupUsingFragment";
// import EventHandlerEx from "./components/EventHandlerEx";

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
  let heading = "List Group - States - Passing Data Via Props";

  return (
    <>
      <ListGroup states={states} heading={heading} />
    </>
  );
}

export default App;
