import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >

          <Route path="" element={<HomePage />} />
          <Route path="shop" element={<ShopPage />} />
        </Route>
      </Routes></BrowserRouter>
  </React.StrictMode>
);

