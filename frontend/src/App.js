import './App.css';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from './components/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} exact />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
