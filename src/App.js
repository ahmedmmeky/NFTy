import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Box from "@mui/material/Box";
import Home from "./content/Home";
import Explore from "./content/Explore";
import Portfolio from "./content/Portfolio";
import Learn from "./content/Learn";
import Chat from "./content/Chat";
import Create from "./content/Create";
import Wallet from "./content/Wallet";
import NFT from "./components/NFT";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Box sx={{
          backgroundColor: '#42a5be',
          minHeight: 10,
          width: '100%'
        }}/>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/explore" element={<Explore />}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
          <Route path="/learn" element={<Learn />}></Route>
          <Route path="/chat" element={<Chat />}></Route>
          <Route path="/create" element={<Create />}></Route>
          <Route path="/wallet" element={<Wallet />}></Route>
          <Route path="/:id" element={<NFT />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
