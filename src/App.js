import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component.jsx';

function App() {
  return (
    <div>
      <>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />


            <Route path="shop" element={<ShopPage />} />
          </Routes></BrowserRouter></>
    </div>
  );
}

export default App;