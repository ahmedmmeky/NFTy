import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import LandingPage from "./content/LandingPage";
import Explore from "./content/Explore";
import Create from "./content/Create";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={LandingPage}></Route>
          <Route path="/explore" component={Explore}></Route>
          <Route path="/create" component={Create}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
