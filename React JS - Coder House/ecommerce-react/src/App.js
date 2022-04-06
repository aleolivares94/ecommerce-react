import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  const onAdd = () => {
    console.log("hice click en onAdd");
  };
  const stock = 10;
  const initial = 1;

  return (
    <div className="App">
      <Router>
        <NavBar />
      </Router>

      <ItemListContainer greeting={"Venta De Ropa Deportiva"} />
    </div>
  );
}

export default App;
