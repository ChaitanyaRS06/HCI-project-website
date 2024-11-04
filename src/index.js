import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DarkMode from "./pages/DarkMode";
import Layout from "./pages/Layout";
 import LightMode from "./pages/LightMode";
 import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path = "darkmode" element={<DarkMode />}/>
        <Route path = "lightmode" element={<LightMode />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
