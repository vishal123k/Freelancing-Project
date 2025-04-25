import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute";
import RestPassword from "./components/RestPassword";
import Verifiy from './components/Verifiy'
import ResetComplete from "./components/ResetComplete";
import ResetVerify from "./components/ResetVerify"
import ResetAgain from "./components/RestAgain"
import ResentIt from "./components/ResentIt";
import FindTalent from "./components/FindTalent";
import VideoEditing from "./components/VideoEditing";
import FindWork from "./components/FindWork";
import EastToLearn from "./components/EastToLeran"
import Postjob from "./components/Postjob";
import GetAdvice from "./components/GetAdvice"
import SocalMedia from "./components/SocalMedia";
import Logo from "./components/Logo"
import Articals from "./components/Articals"
import WordPress from "./components/WordPress";
import FindWork2 from "./components/FindWork2";
import WinWork from "./components/WinWork";
import Jion from "./components/Jion";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="w-screen h-screen bg-richblack-900 flex flex-col ">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/signup"
          element={<Signup setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/rest"
          element={<RestPassword />}
        />
        <Route
          path="/verifiy"
          element={<Verifiy />}
        />
        <Route
          path="/resetComplete"
          element={<ResetComplete />}
        />
        <Route
          path="/resetverify"
          element={<ResetVerify />}
        />
        <Route
          path="/resetagain"
          element={<ResetAgain />}
        />
        <Route
          path="/resentemail"
          element={<ResentIt />}
        />
        <Route
          path="/findtalent"
          element={<FindTalent />}
        />
        <Route
          path="/videoediting"
          element={<VideoEditing />}
        />
        <Route
          path="/findwork"
          element={<FindWork />}
        />
        <Route
          path="/easytolearn"
          element={<EastToLearn />}
        />
        <Route
          path="/postjob"
          element={<Postjob />}
        />
        <Route
          path="/getadvice"
          element={<GetAdvice />}
        />
        <Route
          path="/socalmedia"
          element={<SocalMedia />}
        />
        <Route
          path="/logo"
          element={<Logo />}
        />
        <Route
          path="/Articals"
          element={<Articals />}
        />
        <Route
          path="/wordpress"
          element={<WordPress />}
        />
        <Route
          path="/findworkforskill"
          element={<FindWork2 />}
        />
        <Route
          path="/winwork"
          element={<WinWork />}
        />
        <Route
          path="/jion"
          element={<Jion />}
        />
      </Routes>

    </div>
  );
}

export default App;
