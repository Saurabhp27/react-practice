import "./App.css";
import Folder from "./components/Folder";
import explorer from "./data/data";

function App() {
  console.log(explorer, "explorer");
  return (
    <>
      <Folder data={explorer} />
    </>
  );
}

export default App;
