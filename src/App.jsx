import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home/Home';

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

      <div  className={`${isHomePage ? 'w-full' : 'flex-grow w-[85%]'}`}>
        <Routes>
          <Route path="/" element={<Home/>} />
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
