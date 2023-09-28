import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import Navbar from './containers/Navbar';
import Home from './containers/Home';
import MobilesPage from './containers/MobilesPage';
import LaptopsPage from './containers/LaptopsPage';
import TabletsPage from './containers/TabletsPage';
import SmartHomePage from './containers/SmartHomePage';
import AccessoriesPage from './containers/AccessoriesPage';
import CategoriesPage from './containers/CategoriesPage';
import ProductDetailPage from './containers/ProductDetailPage';
import ReviewsPage from './containers/ReviewsPage';
import CartPage from './containers/CartPage';

function App() {
  return (
    <div className="App">
        <Provider store={store}>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} /> 
              <Route path="/mobiles" element={<MobilesPage />} />
              <Route path="/laptops" element={<LaptopsPage />} />
              <Route path="/tablets" element={<TabletsPage />} />
              <Route path="/smarthome" element={<SmartHomePage />} />
              <Route path="/accessories" element={<AccessoriesPage />} />
              <Route path='/categories' element={<CategoriesPage />} />
              <Route path='/product/:id' element={<ProductDetailPage />} />
              <Route path='/product/:id/review' element={<ReviewsPage />} />
              <Route path='/cart' element={<CartPage />} />
            </Routes>
          </Router>
        </Provider>
    </div>
  );
}

export default App;
