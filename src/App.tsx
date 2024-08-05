import "./App.css";
import ExpandableText from "./components/ExpandableText";

function App() {
  return (
    <>
      <ExpandableText maxChars={50}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint minima,
        placeat qui officia exercitationem quam natus iste iure quisquam!
        Debitis optio beatae velit nisi repudiandae sit esse molestiae
        praesentium quisquam? Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Mollitia aut eligendi labore commodi molestias odio
        quisquam a eos hic quibusdam eaque sit laborum esse in est consequatur,
        iste voluptatem accusamus?
      </ExpandableText>
    </>
  );
}

export default App;
