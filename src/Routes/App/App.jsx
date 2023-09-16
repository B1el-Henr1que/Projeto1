import "./App.css";
import {Outlet} from "react-router-dom"
import Navbar from "../../Compenents/NavBar"
import Header  from "../../Compenents/Header"

function App(){
  return( 
    <div className="App">
      <Navbar/>
     <h1>Fiap Cell</h1>
    <Outlet/>
    <p>Footer</p>
    </div>
  );
}

export default App;
