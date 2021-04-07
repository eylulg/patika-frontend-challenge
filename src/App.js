import "./App.css";
import Intro from "./screen/intro/Intro";
import CardScreen from "./screen/cardScreen/CardScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Intro className="App" />
        </Route>
        <Route path="/home">
          <CardScreen />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
