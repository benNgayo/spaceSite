import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./comps/SharedLayout";
import "./index.css";
import Home from "./comps/Home/home";
import Crew from "./comps/Crew/crew";
import Technology from "./comps/Technology/technology";
import Destination from "./comps/Destination/Destination";
import "tw-elements";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/destination" element={<Destination />} />
            <Route path="/crew" element={<Crew />} />
            <Route path="/technology" element={<Technology />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
