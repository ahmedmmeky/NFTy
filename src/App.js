import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import LandingPage from "./content/LandingPage";
import Explore from "./content/Explore";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={LandingPage}></Route>
          <Route path="/explore" component={Explore}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
