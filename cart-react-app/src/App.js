import logo from './logo.svg';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './pages/ProductList';
import CartPage from './pages/CartPage';


function App() {
  return (
    <div>
      {/* Header는 맨 처음 뜨게 되고 */}
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/products"/>} />
          <Route path="/products" element={<ProductList/>} />
          <Route path="/cart" element={<CartPage/>} />
        </Routes>
    </div>
  );
}

export default App;
