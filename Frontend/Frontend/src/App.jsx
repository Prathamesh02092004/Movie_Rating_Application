import Add from "./components/Add";
import Edit from "./components/Edit";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Show from "./components/show";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/show/:id" element={<Show />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
