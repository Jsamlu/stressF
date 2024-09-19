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
import ScrollToTop from './Components/ScrollToTop';
import Signin from './Components/Login/Signin';
import Journal from './Components/Journal/Journal';
// scrap
import Scrap from './Components/scrap/scrap'
import MainGame from './Components/Games/MainGame';

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (

    <div className='flex'>
      {!isHomePage && (
        <div className="md:w-[18%] hidden md:flex">
          <Header />
        </div>
      )}

      <div  className={`${isHomePage ? ' md:w-full ' : 'md:flex-grow md:w-[80%]'} `}>
        <Routes>
          {/* Links */}
          <Route path="/" element={<Home/>} />
          <Route path="/test" element={<Test/>} />
          <Route path="/forum" element={<Forum/>} />
          <Route path="/resources" element={<Resources/>} />
          <Route path="/activities" element={<Activities/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signin" element={<Signin/>} />
          <Route path="/community" element={<Community/>} />
          <Route path="/journal" element={<Journal/>} />
          <Route path="/about_us" element={<Aboutus/>} />
          <Route path="/games" element={<Games/>} />
          <Route path="/counselling" element={<Counselling/>} />
          <Route path="/maingame" element={<MainGame/>} />

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
      <ScrollToTop/>
      <App />
    </Router>
  );
}

export default MainApp;
