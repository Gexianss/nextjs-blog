import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../components/layout/navbar';
import Home from './home';
import About from './about';
import Posts from './posts';
import Travel from './travel';

const Index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="../components/layout/navbar" element={<Navbar/>}>
          <Route index element={<Home />} />
          <Route path="./about" element={<About />} />
          <Route path="./posts" element={<Posts />} />
          <Route path="./travel" element={<Travel />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const root = document.getElementById('root');
ReactDOM.createRoot(root).render(<Index />);
