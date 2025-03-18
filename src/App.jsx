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
          element={<RestPassword/>}
        />
        <Route
          path="/verifiy"
          element={<Verifiy/>}
        />
        <Route
          path="/resetComplete"
          element={<ResetComplete/>}
        />
        <Route
          path="/resetverify"
          element={<ResetVerify/>}
        />
        <Route
          path="/resetagain"
          element={<ResetAgain/>}
        />
         <Route
          path="/resentemail"
          element={<ResentIt/>}
        />
      </Routes>
    </div>
  );
}

export default App;
