import React from 'react';
import Registration from "./components/registration/Registration";
import { Routes, Route, Link } from "react-router-dom";
import Auth from "./components/auth/Auth";
import Profile from "./components/profile/Profile";

function App() {
  return (
      <Routes>
          <Route path="/registration" element={<Registration/>}/>
          <Route path="/auth" element={<Auth/>}/>
          <Route path="/profile" element={<Profile/>}/>
      </Routes>
  );
}

export default App;
