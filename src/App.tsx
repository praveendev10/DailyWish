import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homelayout from "./pages/layouts/HomeLayout/Homelayout";
import LoginUser from "./pages/layouts/HomeLayout/Userboxes/LoginUser";
import NewUser from "./pages/layouts/HomeLayout/Userboxes/NewUser";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homelayout />}>
          <Route path="signin" element={<LoginUser />} />
          <Route path="signup" element={<NewUser />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
