import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import LandingPage from "./content/LandingPage";
import Explore from "./content/Explore";
import Create from "./content/Create";
import Wallet from "./content/Wallet";
import NFT from "./components/NFT";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<LandingPage />}></Route>
          <Route path="/explore" element={<Explore />}></Route>
          <Route path="/create" element={<Create />}></Route>
          <Route path="/wallet" element={<Wallet />}></Route>
          <Route path="/:id" element={<NFT />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
