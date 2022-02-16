import Home from './components/Home';
import Products from './components/Products';
import Navb from './components/Navbar';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <Navb />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
