import React from 'react';
import Registration from "./components/registration/Registration";
import { Routes, Route, Link } from "react-router-dom";
import Auth from "./components/auth/Auth";

function App() {
  return (
      <Routes>
          <Route path="/registration" element={<Registration/>}/>
          <Route path="/auth" element={<Auth/>}/>
      </Routes>
  );
}

export default App;
