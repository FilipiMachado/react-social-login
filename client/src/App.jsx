// Components
import Navbar from "./components/Navbar";
// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Post from "./pages/Post";
// React Router
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
//Styles
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/post/:id" element={<Post />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
