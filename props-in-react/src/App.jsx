import "./App.css";
import Cards from "./Components/Cards.jsx";
import Water from "./assets/water.jpg";
import Sunset from "./assets/sunset.jpg";
import Owl from "./assets/owl.jpg";

function App() {
  return (
    <>
      <div className="flex  m-4">
        <Cards name="Water" url={Water} />
        <Cards name="Sunset" url={Sunset} />
        <Cards name="Owl" url={Owl} />
      </div>
    </>
  );
}

export default App;
