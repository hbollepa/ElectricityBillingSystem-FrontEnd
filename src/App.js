import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import Login from './Components/Login';
import Admin from './Components/Admin';
import Home from "./Components/Home";
import CustomerHome from "./Components/CustomerHome";
function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/customer" element={<CustomerHome />} />
        <Route path="/admin" element={<Admin />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
