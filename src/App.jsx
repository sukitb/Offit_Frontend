import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
// pages
import { Home } from "./Pages/Home";
import './App.css'

// todo add AddActivity
// todo add EditProfile

import ActivityCardList from './components/ActivityCardList/ActivityCardList'






function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/addactivity" element={<AddActivity />} /> */}
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
