import {BrowserRouter} from "react-router-dom";
import NavBar from "./Components/navBar";
import "./App.css";


function App ()
{
  return (
    <>
      {
        <BrowserRouter>
        <div className="App">
          <header>
            <NavBar/>
          </header>
          </div>
          <footer>
          </footer>
        </BrowserRouter>
      }
    </>
  );
}
export default App;