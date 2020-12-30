import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import GoLink from "./GoLink";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/l/:code" component={GoLink} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
