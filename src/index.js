import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/header.component';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />


        <Route path="shop" element={<ShopPage />} />
      </Routes></BrowserRouter>
  </React.StrictMode>
);

