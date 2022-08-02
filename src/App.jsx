import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// css
import "./App.css";
// pages
import { Home } from "./Pages/Home";
import './App.css'

// todo add AddActivity
// todo add EditProfile

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/addactivity" element={<AddActivity />} /> */}
          {/* <Route path="/editprofile" element={<EditProfile />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
