import React, { useState } from "react";
import "./index.css";
import Logo from "./images/logo.png";
import { BrowserRouter, Routes, Link } from "react-router-dom";
import Sidebar from "./components/sidebar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="main flex">
          <div className="sidebar w-[240px] bg-white h-screen overflow-y-scroll">
            <div className="logo flex justify-center items-center h-[70px]">
              <img src={Logo} className="h-[28px]" alt="" />
            </div>
            <div className="sidemenu">
              <ul className="menu mb-8">
                <li className="px-[25px] py-[12px] text-[13px]">Menu</li>
                <Sidebar />
              </ul>
            </div>
          </div>
          <div className="content">content</div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
