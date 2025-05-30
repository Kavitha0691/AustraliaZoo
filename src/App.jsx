import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import GroupPage from "./pages/GroupPage";
import Layout from "./layout/Layout.jsx"

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
           <Route index element={<Home />} />
           <Route path=":category" element={<GroupPage />} />
        </Route>
      </Routes>
  );
}

export default App;
