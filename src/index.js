import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DarkMode from "./pages/DarkMode";
import Layout from "./pages/Layout";
import LightMode from "./pages/LightMode";
import ReminderLightMode from "./pages/ReminderLightMode";
import ReminderDarkMode from "./pages/ReminderDarkMode";
import ButtonLink from './components/ButtonLink'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                </Route>
                <Route path = "lightmode" element={<LightMode />}/>
                <Route path = "darkmode" element={<DarkMode />}/>
                <Route path = "reminderlightmode" element={<ReminderLightMode />}/>
                <Route path = "reminderdarkmode" element={<ReminderDarkMode />}/>
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
