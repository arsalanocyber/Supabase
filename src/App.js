import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Success from './pages/Success';
import Home from './pages/Home';
import CreateProduct from './pages/CreateProduct';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/success" element={<Success />} />
          <Route path="/create-product" element={<CreateProduct />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
