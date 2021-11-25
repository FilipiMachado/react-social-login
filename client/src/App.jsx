// Components
import Navbar from "./components/Navbar";
// Pages
import Home from "./pages/Home";
import Post from "./pages/Post";
import Login from "./pages/Login";
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
          <Route>
            <Home />
            <Post />
            <Login />
          </Route>
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
