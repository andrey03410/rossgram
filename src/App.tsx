import React from 'react';
import Registration from "./components/registration/Registration";
import { Routes, Route} from "react-router-dom";
import Auth from "./components/auth/Auth";
import Profile from "./components/profile/Profile";
import Subscribers from "./components/subscribers/Subscribers";
import Feed from "./components/profile/Feed";

function App() {
  return (
      <Routes>
          <Route path="/registration" element={<Registration/>}/>
          <Route path="/auth" element={<Auth/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/profile/subs" element={<Subscribers/>}/>
          <Route path="/feed" element={<Feed/>}/>
      </Routes>
  );
}

export default App;
