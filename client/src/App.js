import "./App.css";
import axios from "axios";
import { Home, Student, Professor, Subject} from "./views";
import { Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
axios.defaults.baseURL = "http://localhost:3001/";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path="/" render={() => <Home />} />
      <Route exact path="/student" render={() => <Student />} />
      <Route exact path="/professor" render={() => <Professor />} />
      <Route exact path="/subject" render={() => <Subject />} />
    </div>
  );
}

export default App;
