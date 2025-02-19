// import React, { useContext } from "react";
// import { useState } from "react";
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
import UserLogin from "./Components/Login/LoginUser";
import ProfessionalLogin from "./Components/Login/LoginProfessional";
import Register from "./Components/Login/Register";
import UserRegister from "./Components/Login/RegisterUser";
import ProfessionalRegister from "./Components/Login/RegisterProfessional";
import Community from "./Components/Community/CommunityPage";
import Aboutus from "./Components/Aboutus/Aboutus";
import Games from "./Components/Games/Games";
import Counselling from "./Components/Counselling/Counselling";
import ScrollToTop from "./Components/ScrollToTop";

import Journal from "./Components/Journal/Journal";


//contexts
// import { login_context } from "./Components/Context/login/login_context";
import { AnswerProvider } from "./Components/Context/test/AnswerContext";
import LoginProvider from "./Components/Context/login/loginProvider";

// scrap
import Scrap from "./Components/scrap/scrap";
import MainGame from "./Components/Games/MainGame";
import Prof_page from "./Components/Counselling/Prof_page";
import { ActivityId } from "./Components/Activities/ActivityId";
import { Dashboard, Profile } from "./Components/Profile";

//games
import {
  ConnectTheDots,
  StressBallBounce,
  MazeGame,
  StarryBackground,
  WordSearchGame,
} from "./Components/Games";

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isLogin = location.pathname === "/login";
  const isSignin = location.pathname === "/signin";
  const isforumPage = location.pathname === "/forum";

  // const { showProfile, setShowProfile } = useContext(login_context);
  // console.log(showProfile)

  let showProfile = true;

  return (
    <LoginProvider>
      <AnswerProvider>
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
                <Route path="/login-user" element={<UserLogin />} />
                <Route path="/login-professional" element={<ProfessionalLogin />} />
                <Route path="/register" element={<Register />} />
                <Route path="/register-user" element={<UserRegister />} />
                <Route path="/register-professional" element={<ProfessionalRegister />} />
                <Route path="/community" element={<Community />} />
                <Route path="/journal" element={<Journal />} />
                <Route path="/about_us" element={<Aboutus />} />
                <Route path="/games" element={<Games />} />
                <Route path="/counselling" element={<Counselling />} />
                <Route path="/Counselling/:id" element={<Prof_page />} />
                <Route path="/maingame" element={<MainGame />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/profile" element={<Profile />} />

                {/*games */}
                <Route
                  path="/stressballbounce"
                  element={<StressBallBounce />}
                />
                <Route path="/wordsearchgame" element={<WordSearchGame />} />
                <Route path="/mazegame" element={<MazeGame />} />
                <Route path="/connectthedots" element={<ConnectTheDots />} />
                <Route
                  path="/starrybackground"
                  element={<StarryBackground />}
                />

                {/* ERROR page */}
                <Route path="*" element={<p>404 ERROR</p>} />
                <Route path="/scrap" element={<Scrap />} />
              </Routes>
            ) : (
              <Profile />
            )}
          </div>
        </div>
      </AnswerProvider>
    </LoginProvider>
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
