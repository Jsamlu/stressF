import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './Components/Header';

import Home from './Components/Home/Home';
import Test from './Components/Test/Test';
import Forum from './Components/Test/Forum';
import Resources from './Components/Resources/Resources'
import Activities from './Components/Activities/Activities';
import Login from './Components/Login/Login';
import Community from './Components/Community/Community';
import Aboutus from './Components/Aboutus/Aboutus';
import Games from './Components/Games/Games';
import Counselling from './Components/Counselling/Counselling';
import Journal from './Components/Journal/Journal'


// scrap
import Scrap from './Components/scrap/scrap'

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (

    <div className='flex'>
      {!isHomePage && (
        <div className="w-[15%] hidden md:flex">
          <Header />
        </div>
      )}

      <div  className={`${isHomePage ? ' md:w-full ' : 'flex-grow w-[85%]'} `}>
        <Routes>
          {/* Links */}
          <Route path="/" element={<Home/>} />
          <Route path="/test" element={<Test/>} />
          <Route path="/forum" element={<Forum/>} />
          <Route path="/resources" element={<Resources/>} />
          <Route path="/activities" element={<Activities/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/community" element={<Community/>} />
          <Route path="/journal" element={<Journal/>} />
          <Route path="/about_us" element={<Aboutus/>} />
          <Route path="/games" element={<Games/>} />
          <Route path="/counselling" element={<Counselling/>} />

          {/* ERROR page */}
          <Route path="*" element={<p>404 ERROR</p>} />
          <Route path="/scrap" element={<Scrap/>} />
          
        </Routes>
      </div>
    </div>
  )
}

function MainApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default MainApp;
