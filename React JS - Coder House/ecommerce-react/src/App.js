
import "./App.css";
import NavBar from "./components/NavBar";
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
      </Router>

      
     <ItemListContainer greeting = {'Ecommerce-React'} /> 
    </div>
  );
}

export default App;
