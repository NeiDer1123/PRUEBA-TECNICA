import { Home, Student, Professor, Subject} from "./views";
import { Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <Route exact path="/" render={() => <Home />} />
      <Route exact path="/student" render={() => <Student />} />
      <Route exact path="/professor" render={() => <Professor />} />
      <Route exact path="/subject" render={() => <Subject />} />
    </div>
  );
}

export default App;
