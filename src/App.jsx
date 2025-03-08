// import React, { useContext } from "react";
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
import FeedbackForm from "./Components/Feedback/FeedbackForm";

//Doctors
import { DoctorProfile, DoctorDashboard } from "./Components/Profile";
import DoctorHeader from "./Components/DoctorHeader";
import {
  DoctorAppointments,
  PendingAppointments,
  AcceptedAppointments,
} from "./Components/Appointments";

//contexts

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

//redux
import { useSelector } from "react-redux";
import LoginUser from "./Components/Login/LoginUser";
import LoginProfessional from "./Components/Login/LoginProfessional";

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isLogin = location.pathname === "/login";
  const isRegister = location.pathname === "/register";
  const isforumPage = location.pathname === "/forum";

  let showProfile = true;

  const role = useSelector((state) => state.role) ?? "U";
  console.log(role);

  return (
    <>
      {role === "U" ? (
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
            {isHomePage || showProfile || isSignin || isLogin || isRegister ? (
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
                <Route
                  path="/login-professional"
                  element={<ProfessionalLogin />}
                />
                <Route path="/register" element={<Register />} />
                <Route path="/register-user" element={<UserRegister />} />
                <Route
                  path="/register-professional"
                  element={<ProfessionalRegister />}
                />
                <Route path="/community" element={<Community />} />
                <Route path="/journal" element={<Journal />} />
                <Route path="/about_us" element={<Aboutus />} />
                <Route path="/feedbackform" element={<FeedbackForm />} />

                <Route path="/counselling" element={<Counselling />} />
                <Route path="/Counselling/:id" element={<Prof_page />} />

                <Route path="/games" element={<Games />} />
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
      ) : //else state
      role === "D" ? (
        <div className="flex">
          <div className="md:w-[18%] hidden md:flex">
            <DoctorHeader />
          </div>

          <div className="md:flex-grow md:w-[80%]">
            {/* Links */}
            {isHomePage || showProfile || isSignin || isLogin ? (
              <Routes>
                {/* <Route path="/" element={<Dhome />} /> */}
                <Route
                  path="/doc_appointments"
                  element={<DoctorAppointments />}
                />
                <Route
                  path="/acpt_appointments"
                  element={<AcceptedAppointments />}
                />
                <Route
                  path="/pend_appointments"
                  element={<PendingAppointments />}
                />

                <Route path="/dashboard" element={<DoctorDashboard />} />
                <Route path="/" element={<DoctorProfile />} />

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
                <Route path="/login-user" element={<UserLogin />} />
              </Routes>
            ) : (
              <Profile />
            )}
          </div>
        </div>
      ) : role === "NA" ? (
        <div className="felx">
          {!(isHomePage || isforumPage) && (
            <div className="md:w-[18%] hidden md:flex">
              <Header />
            </div>
          )}
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/login-user" element={<LoginUser/>}/>
            <Route path="/login-professional" element={<LoginProfessional/>}/>
            <Route path="/profile" element={<Profile/>}/>
            
            


          </Routes>
        </div>
      ) : (
        <p>page not specified</p>
      )}
    </>
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
