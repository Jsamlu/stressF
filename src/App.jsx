import React from "react";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Header from "./Components/Header";

import Home from "./Components/Home/Home";
import { Result } from "./Components/Test";
import { Test } from "./Components/Test";
import { Forum } from "./Components/Test";
import Resources from "./Components/Resources/Resources";
import Activities from "./Components/Activities/Activities";
import Login from "./Components/Login/Login";
import Community from "./Components/Community/CommunityPage";
import Aboutus from "./Components/Aboutus/Aboutus";
import Games from "./Components/Games/Games";
import Counselling from "./Components/Counselling/Counselling";
import ScrollToTop from "./Components/ScrollToTop";
import Signin from "./Components/Login/Signin";
import Journal from "./Components/Journal/Journal";

//contexts
import { login_context } from "./Components/Context/login/login_context";

// scrap
import Scrap from "./Components/scrap/scrap";
import MainGame from "./Components/Games/MainGame";
import Prof_page from "./Components/Counselling/Prof_page";
import { ActivityId } from "./Components/Activities/ActivityId";
import { Dashboard, Profile } from "./Components/Profile";

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isLogin = location.pathname === "/login";
  const isSignin = location.pathname === "/signin";
  const isforumPage = location.pathname === "/forum";

  const [ showProfile, setShowProfile ] = useState(false);
  
    return (
    <login_context.Provider value={[showProfile, setShowProfile]}>
      <div className="flex">
        {!(isHomePage || isforumPage) && (
          <div className="md:w-[18%] hidden md:flex">
            <Header />
          </div>
        )}

        <div
          className={`${
            isHomePage ? " md:w-full " : "md:flex-grow md:w-[80%]"
          }${isforumPage ? " md:w-full " : "md:flex-grow md:w-[80%]"} `}
        >
          {/* Links */}
          {isHomePage || showProfile || isSignin || isLogin ? (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/test" element={<Test />} />
              <Route path="/forum" element={<Forum />} />
              <Route path="/result" element={<Result />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/activities" element={<Activities />} />
              <Route path="/activities/:id" element={<ActivityId />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/community" element={<Community />} />
              <Route path="/journal" element={<Journal />} />
              <Route path="/about_us" element={<Aboutus />} />
              <Route path="/games" element={<Games />} />
              <Route path="/counselling" element={<Counselling />} />
              <Route path="/Counselling/:id" element={<Prof_page />} />
              <Route path="/maingame" element={<MainGame />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/profile" element={<Profile />} />

              {/* ERROR page */}
              <Route path="*" element={<p>404 ERROR</p>} />
              <Route path="/scrap" element={<Scrap />} />
            </Routes>
          ) : (
            <Profile />
          )}
        </div>
      </div>
    </login_context.Provider>
  );
}

function MainApp() {
  return (
    <Router>
      <ScrollToTop />
      <App />
    </Router>
  );
}

export default MainApp;
