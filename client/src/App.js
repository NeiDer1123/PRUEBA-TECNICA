import { Home, Form } from "./views";
import { Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <Route exact path="/" render={() => <Home />} />

      <Route path="/create" render={() => <Form />} />
    </div>
  );
}

export default App;
